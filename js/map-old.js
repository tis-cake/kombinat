ymaps.ready(init);

// Массив с метками. На данный момент количество меток: 1.
var placemarks = [
    
    // {
    //     latitude: ,         // ширина
    //     longitude: ,        // высота
    //     hintContent: '',    // хинт
    //     balloonContent: ''  // балун
    // },

    {
        latitude: 55.732458,
        longitude: 37.642312,
        hintContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1',
        balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
    }
];

// Адаптивный зум и иконка.
var width  = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var zoomValue;
var iconSize = [];

if (width > 750) {
    zoomValue = 10;
    iconSize = [21, 34];
} else if (width > 450 && width <= 750) {
    zoomValue = 12;
    iconSize = [34, 55];
} else {
    zoomValue = 12;
    iconSize = [18, 32];
}

// console.log(width, height);
// console.log(zoomValue);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.732458, 37.642312],
        zoom: zoomValue,
        controls: [],
        behaviors: ['drag', 'dblClickZoom']
    });

    placemarks.forEach(function(obj) {
        var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
                hintContent: obj.hintContent,
                balloonContent: obj.balloonContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon-map.svg',
                // iconImageOffset: [],             // смещение иконки
                iconImageSize: iconSize
            });
        map.geoObjects.add(placemark);
    })

    var zoomControl = new ymaps.control.ZoomControl({options: {
        position: { right: 50, top: 110 }
    }}); 

    map.controls.add(zoomControl);
 
}