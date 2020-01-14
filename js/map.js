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


// function init() {
//     // Создание карты.
//     // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
//     var myMap = new ymaps.Map("map", {
//         // Координаты центра карты.
//         // Порядок по умолчнию: «широта, долгота».
//         center: [55.732458, 37.642312],
//         // Уровень масштабирования. Допустимые значения:
//         // от 0 (весь мир) до 19.
//         zoom: 12,

//         // Менеджер поведения карты. Включены: перетаскиваниек мышкой
//         // и двойной клик для увеличения/уменьшения карты (поведение колёсика мышки не включено).
//         //behaviors: ['drag', 'dblClickZoom'],

//         // Элементы управления
//         // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
//         controls: [

//             //'zoomControl', // Ползунок масштаба
//             'rulerControl', // Линейка
//             //'routeButtonControl', // Панель маршрутизации
//             'trafficControl', // Пробки
//             'typeSelector', // Переключатель слоев карты
//             'fullscreenControl', // Полноэкранный режим

//             // Поисковая строка
//             new ymaps.control.SearchControl({
//                 options: {
//                     // вид - поисковая строка
//                     size: 'large',
//                     // Включим возможность искать не только топонимы, но и организации.
//                     provider: 'yandex#search',
//                     position: {
//                         right: 250,
//                         top: 10
//                     }
//                 }
//             }),

//             // Ползунок масштаба смещён к правой стороне экрана.
//             new ymaps.control.ZoomControl({
//                 options: {
//                     position: {
//                         right: 50,
//                         top: 110
//                     }
//                 }
//             })

//         ]
//     });

//     // Добавление метки
//     // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
//     var myPlacemark = new ymaps.Placemark([55.732458, 37.642312], {
//         // Хинт показывается при наведении мышкой на иконку метки.
//         hintContent: 'Комбинат',
//         // Балун откроется при клике по метке.
//         balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
//     }, {
//             // Опции.

//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',

//             // Своё изображение иконки метки.
//             iconImageHref: '/bitrix/templates/kombinat/svg/icon-map.svg',
//             // Размеры метки.
//             iconImageSize: [32, 32],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-16, -16],
//         }


//         );

//     // После того как метка была создана, добавляем её на карту.
//     myMap.geoObjects.add(myPlacemark);
// }