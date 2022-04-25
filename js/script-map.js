window.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.56],
            zoom: 10,
        });

        var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/svg/Subtract.svg',
            iconImageSize: [28, 40],
            iconImageOffset: [-3, -42]
        });
        
        var myCircle = new ymaps.GeoObject({
            geometry: {
                type: "Circle",
                coordinates: [55.76, 37.64],
                radius: 10000
            }
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myCircle);
    }


})