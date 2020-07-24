(function (root, factory) {

  var pluginName = 'PolygonAvatar';

  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if (typeof exports === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
}(this, function (pluginName) {

  'use strict';

  var bgImage = '';
  var defaults = {
    selector: '.polyavatar',
    classToAdd: "loaded",
    sides: 6,
    percentage: 0.98,
    rotation: -Math.PI * 0.5,
    image: '',
    animated: true,
    withImage: true,
    withProgress: true,
    border: true
  };
  /**
   * Merge defaults with user options
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   */
  var extend = function (target, options) {
    var prop, extended = {};
    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  };

  /**
   * Helper Functions
   @private
   */
  var point = function (x, y) {
    return {
      x,
      y
    }
  }

  var polygon = function (sides, radius, outerSpace, rot = 0) {
    var i = 0;
    const step = Math.PI * 2 / sides,
      path = [];
    while (i < sides) {
      var pt = point((Math.cos(i * step + rot) * radius) + outerSpace, (Math.sin((i++) * step + rot) * radius) + outerSpace);
      path.push(pt);
    }
    return path;
  }

  var setImg = function (bg, canvas, width, ctx, outerSpace) {
    var img;
    if (bg instanceof Image) {
      img = bg;
    } else {
      img = new Image();
      img.src = bg;
    }

    if (bgImage !== '') {
      if (img.complete) {
        setImageBackground(canvas, width, ctx, img, outerSpace);
      } else {
        img.onload = function () {
          setImageBackground(canvas, width, ctx, img, outerSpace);
        };
      }
    }

    return img;
  }

  var setImageBackground = function (canvas, width, ctx, img, outerSpace) {
    var imgWidth = img.width,
      imgHeight = img.height,
      percentWidth = width / imgWidth,
      percentHeight = width / imgHeight,
      percentImage = percentHeight > percentWidth ? percentHeight : percentWidth,
      newWidth = imgWidth * percentImage * (outerSpace === 0 ? 1 : 0.85 - (width / outerSpace) / 100),
      newHeight = imgHeight * percentImage * (outerSpace === 0 ? 1 : 0.85 - (width / outerSpace) / 100),
      offsetWidth = -(newWidth / 2) + outerSpace,
      offsetHeight = -(newHeight / 2) + outerSpace;

    ctx.save();
    ctx.clip();
    if (canvas.clip) {
      if (canvas.checkSupportCompositeMode(ctx, "destination-in")) {
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight, offsetWidth, offsetHeight, newWidth, newHeight);
        canvas.makeClipMask.call(canvas);
      } else {
        canvas.makeClipMask.call(canvas);
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight, offsetWidth, offsetHeight, newWidth, newHeight);
      }
    } else {
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight, offsetWidth, offsetHeight, newWidth, newHeight);
    }
    ctx.restore();
  };

  function roundedPath(ctx, path, width, radius) {
    var i = 0,
      p1 = path[i++],
      p2 = path[i];
    const len = path.length
    ctx.moveTo((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    while (i <= len) {
      p1 = p2;
      p2 = path[(++i) % len];
      ctx.arcTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2, width / radius);
    }
  }

  var strokeRoundedPath = function (ctx, cx, cy, path, width, radius, style, barWidth) {
    ctx.setTransform(1, 0, 0, 1, cx, cy);
    ctx.lineWidth = barWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = style;
    ctx.beginPath();
    roundedPath(ctx, path, width, radius);
    ctx.closePath();
    ctx.stroke();
  }

  var fillRoundedPath = function (canvas, ctx, img, outerSpace, cx, cy, path, width, radius, style, renderImage) {
    ctx.setTransform(1, 0, 0, 1, cx, cy);
    ctx.fillStyle = style;
    ctx.beginPath();
    roundedPath(ctx, path, width, radius);
    ctx.fill();

    if (renderImage) {
      setImageBackground(canvas, width, ctx, img, outerSpace);
    }
  }

  var render = function (canvas, ctx, img, outerSpace, animated, polyRadius, bgPoly, hexPoly, hexPolyInner, hexBar, width, barWidth, inset, approxLineLen, cornerRadius, withImage, withProgress, percentage, progress) {
    var currentProgress = progress % 1;
    if (animated === false) {
      currentProgress = percentage;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillRoundedPath(canvas, ctx, img, outerSpace, polyRadius, polyRadius, bgPoly, width, cornerRadius, "#1d2333");
    fillRoundedPath(canvas, ctx, img, outerSpace, polyRadius, polyRadius, hexPoly, width, cornerRadius, "#293249");
    fillRoundedPath(canvas, ctx, img, outerSpace, polyRadius, polyRadius, hexPolyInner, width, cornerRadius - barWidth * inset * 2, "#000", withImage);
    ctx.lineDashOffset = approxLineLen - currentProgress * approxLineLen;

    if (withProgress === true) {
      if (animated === true) {
        strokeRoundedPath(ctx, polyRadius, polyRadius, hexBar, width, cornerRadius - barWidth * inset, "#3e8a2b", barWidth);

        if (currentProgress < percentage) {
          progress += 0.01;
          requestAnimationFrame(function () {
            render(canvas, ctx, img, outerSpace, animated, polyRadius, bgPoly, hexPoly, hexPolyInner, hexBar, width, barWidth, inset, approxLineLen, cornerRadius, withImage, withProgress, percentage, progress);
          });
        }
      } else {
        strokeRoundedPath(ctx, polyRadius, polyRadius, hexBar, width, cornerRadius - barWidth * inset, "#3e8a2b", barWidth);
      }
    }
  }

  var setPercentage = function (canvas, optionsPerc) {
    var perc = optionsPerc;
    if (canvas.dataset.percentage && defaults.percentage === optionsPerc) {
      perc = parseFloat(canvas.dataset.percentage);
    }
    if (perc >= 1) {
      perc = defaults.percentage;
    }
    return perc;
  }

  /**
   * Plugin Object
   * @param {Object} options User options
   * @constructor
   */
  function Plugin(options) {
    this.options = extend(defaults, options);
    this.init(); // Initialization Code Here
  }

  /**
   * Plugin prototype
   * @public
   * @constructor
   */
  Plugin.prototype = {
    init: function () {
      // find all matching DOM elements.
      // makes `.selectors` object available to instance.
      this.elements = document.querySelectorAll(this.options.selector);

      this.withImage = this.options.image !== '';
      bgImage = this.options.image;

      if (this.options.sides < 3) {
        this.options.sides = 3;
      }

      for (var i = 0; i < this.elements.length; i++) {
        const canvas = this.elements[i];

        var perc = setPercentage(canvas, this.options.percentage);
        canvas.classList.add(this.options.classToAdd);

        const width = canvas.width;

        const barWidth = width / 24;
        const outerSpace = this.options.border === true ? ((width / 100) * 10) : 0;
        const cornerRadius = barWidth * 2 + 10;
        const bgRadius = (width / 2);
        const polyRadius = (width / 2) - outerSpace;
        const inset = 0.5;
        const barRadius = polyRadius - barWidth * inset;
        const approxLineLen = (barRadius * Math.PI * 2) * defaults.percentage;

        const bgPoly = polygon(this.options.sides, bgRadius, outerSpace, this.options.rotation);
        const hexPoly = polygon(this.options.sides, polyRadius, outerSpace, this.options.rotation);
        const hexPolyInner = polygon(this.options.sides, polyRadius - barWidth * 2 * inset, outerSpace, this.options.rotation);;
        const hexBar = polygon(this.options.sides, barRadius, outerSpace, this.options.rotation);

        const ctx = canvas.getContext("2d");
        ctx.setLineDash([approxLineLen]);

        var img;
        var obj = this;
        if (this.withImage === true) {
          img = setImg(this.options.image, canvas, width, ctx, outerSpace);
          img.onload = function (x) {
            perc = setPercentage(canvas, obj.options.percentage);
            render(canvas, ctx, img, outerSpace, obj.options.animated, polyRadius, bgPoly, hexPoly, hexPolyInner, hexBar, width, barWidth, inset, approxLineLen, cornerRadius, obj.withImage, obj.options.withProgress, perc, 0.0);
          }
        } else {
          render(canvas, ctx, img, outerSpace, obj.options.animated, polyRadius, bgPoly, hexPoly, hexPolyInner, hexBar, width, barWidth, inset, approxLineLen, cornerRadius, obj.withImage, obj.options.withProgress, perc, 0.0);
        }
      }
    }, // #! init
    destroy: function () {
      // Remove any event listeners and undo any "init" actions here...
    },
    showOptions: function () {
      console.log(this.options)
    }
  };
  return Plugin;
}));