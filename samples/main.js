function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener("DOMContentLoaded", function () {

    var simple = new PolygonAvatar({
        selector: '.polyavatar',
        image: 'https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal',
        percentage: Math.round(Math.random() * 100) / 100,        
        progressBarColor: '#aaa',
        online: true,
        levelNumber: getRandomInt(99)
    });

    var noAnimation = new PolygonAvatar({
        selector: '.polyavatarnoanimation',
        image: `https://randomuser.me/api/portraits/men/${getRandomInt(99)}.jpg`,
        percentage: Math.round(Math.random() * 100) / 100, 
        animated: false,
        online: false,
        levelNumber: getRandomInt(99)
    })    

    var noImage = new PolygonAvatar({
        selector: '.polyavatarnoimage',
        online: false,
        levelNumber: getRandomInt(99)
    })

    var noProgress  = new PolygonAvatar({
        selector: '.polyavatarnoprogress',
        image: 'avatar3.jpg',
        showProgress: false,
        online: true,
        levelNumber: getRandomInt(99)
    })

    var noBorder  = new PolygonAvatar({
        selector: '.polyavatarnoborder',
        image: 'avatar4.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        border: false,
        online: true,
        levelNumber: getRandomInt(99)
    })

    var triangles = new PolygonAvatar({
        selector: '.polyavatartriangle',
        image: 'avatar5.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:3,
        online: true,
        levelNumber: getRandomInt(99)
    });
    

    var diamond = new PolygonAvatar({
        selector: '.polyavatardiamond',
        image: 'avatar6.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:4,
        online: true
    });
    

    var pentagon = new PolygonAvatar({
        selector: '.polyavatarpentagon',
        image: 'avatar7.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:5,
        online: true,
        levelNumber: getRandomInt(99)
    });
    

    var hexagon = new PolygonAvatar({
        selector: '.polyavatarhexagon',
        image: 'avatar8.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:6,
        online: true,
        levelNumber: getRandomInt(99)
    });
    

    var heptagon = new PolygonAvatar({
        selector: '.polyavatarheptagon',
        image: 'avatar9.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:7,
        online: true,
        levelNumber: getRandomInt(99)
    });
    

    var octagon = new PolygonAvatar({
        selector: '.polyavataroctagon',
        image: 'avatar10.jpg',
        percentage: Math.round(Math.random() * 100) / 100,
        sides:8,
        online: true,
        levelNumber: getRandomInt(99)
    });
});

//'https://i.pravatar.cc/256?u='+ Math.random()
//https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal