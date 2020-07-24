document.addEventListener("DOMContentLoaded", function () {

    var simple = new PolygonAvatar({
        selector: '.polyavatar',
        image: 'https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal',
        percentage: Math.round(Math.random() * 100) / 100
    });

    var noAnimation = new PolygonAvatar({
        selector: '.polyavatarnoanimation',
        image: 'https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal',
        animated: false
    })    

    var noImage = new PolygonAvatar({
        selector: '.polyavatarnoimage',
    })

    var noProgress  = new PolygonAvatar({
        selector: '.polyavatarnoprogress',
        image: 'avatar.jpg',
        withProgress: false
    })

    var noBorder  = new PolygonAvatar({
        selector: '.polyavatarnoborder',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        border: false
    })

    var triangles = new PolygonAvatar({
        selector: '.polyavatartriangle',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:3
    });
    

    var diamond = new PolygonAvatar({
        selector: '.polyavatardiamond',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:4
    });
    

    var pentagon = new PolygonAvatar({
        selector: '.polyavatarpentagon',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:5
    });
    

    var hexagon = new PolygonAvatar({
        selector: '.polyavatarhexagon',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:6
    });
    

    var heptagon = new PolygonAvatar({
        selector: '.polyavatarheptagon',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:7
    });
    

    var octagon = new PolygonAvatar({
        selector: '.polyavataroctagon',
        image: 'avatar.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:8
    });
    

    var big = new PolygonAvatar({
        selector: '.polyavatarbig',
        image: 'https://i.pravatar.cc/1024?u='+ Math.random(),
    })

    // access public plugin methods
    //pluginInstance.showOptions();
});

//'https://i.pravatar.cc/256?u='+ Math.random()
//https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal