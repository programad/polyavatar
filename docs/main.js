document.addEventListener("DOMContentLoaded", function () {

    var simple = new PolygonAvatar({
        selector: '.polyavatar',
        image: 'https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal',
        percentage: Math.round(Math.random() * 100) / 100,        
        progressBarColor: '#aaa',
        online: true,
        levelNumber: 57
    });

    var noAnimation = new PolygonAvatar({
        selector: '.polyavatarnoanimation',
        image: 'avatar2.jpg',
        percentage: Math.round(Math.random() * 100) / 100, 
        animated: false,
        online: false,
    })    

    var noImage = new PolygonAvatar({
        selector: '.polyavatarnoimage',
        online: false
    })

    var noProgress  = new PolygonAvatar({
        selector: '.polyavatarnoprogress',
        image: 'avatar3.jpg',
        showProgress: false,
        online: true
    })

    var noBorder  = new PolygonAvatar({
        selector: '.polyavatarnoborder',
        image: 'avatar4.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        border: false,
        online: true
    })

    var triangles = new PolygonAvatar({
        selector: '.polyavatartriangle',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:3,
        online: true
    });
    

    var diamond = new PolygonAvatar({
        selector: '.polyavatardiamond',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:4,
        online: true
    });
    

    var pentagon = new PolygonAvatar({
        selector: '.polyavatarpentagon',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:5,
        online: true
    });
    

    var hexagon = new PolygonAvatar({
        selector: '.polyavatarhexagon',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:6,
        online: true
    });
    

    var heptagon = new PolygonAvatar({
        selector: '.polyavatarheptagon',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:7,
        online: true
    });
    

    var octagon = new PolygonAvatar({
        selector: '.polyavataroctagon',
        image: 'https://i.pravatar.cc/256?u='+ Math.random(),
        percentage: Math.round(Math.random() * 100) / 100,
        sides:8,
        online: true
    });
    

    var big = new PolygonAvatar({
        selector: '.polyavatarbig',
        percentage: Math.round(Math.random() * 100) / 100,
        image: 'https://i.pravatar.cc/1024?u='+ Math.random(),
        online: true
    })
});

//'https://i.pravatar.cc/256?u='+ Math.random()
//https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal