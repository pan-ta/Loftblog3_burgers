$(document).ready(function(){

    //////////////////////
    // hamburger

    $(".hamburger__button").on("click", e => {
        e.preventDefault();
        $(".hamburger__overlay").css("display", "initial");
    })

    $(".hamburger__close").on("click", e => {
        e.preventDefault();
        $(".hamburger__overlay").css("display", "none");
    })

    ////////////////////////
    // burgers ingredients

    $(".burgers__ingredients-button").on("click", e => {
        e.preventDefault();
        $(".burgers__ingredients-content").toggleClass("invisible");
    })

    /////////////////////////////
    // acco

    // acco team

    $(".team__acco-title").on("click", e => {
        e.preventDefault();
        $(e.currentTarget).closest(".team__acco-item").toggleClass("team__acco-item_active");
        // $(e.currentTarget).closest(".team__acco-item").find(".team__acco-content").slideToggle();
        $(e.currentTarget).closest(".team__acco-item").siblings().removeClass("team__acco-item_active");
        // $(e.currentTarget).closest(".team__acco-item").siblings().find(".team__acco-content").slideUp();
    })

    // acco menu
    $(".menu__acco-trigger").on("click", e => {
        e.preventDefault();
        $(e.currentTarget).closest(".menu__acco-item").toggleClass("menu__acco-item_active");
        $(e.currentTarget).closest(".menu__acco-item").siblings().removeClass("menu__acco-item_active");
    })



    ////////////////////////////
    // popup

    const popupWindow = $(".popup");
    const popupTitle = $(".popup__title");
    const popupText = $(".popup__desc");

    // popup test

    $(".logo").on("click", e => {
        e.preventDefault();
        $(".popup").css("display", "initial");
        popupTitle.text("Не ожидали??");
        popupText.text("А я тут проверяю поп-ап. Как Вам поп-ап?");
    })

    $(".popup__close").on("click", e => {
        e.preventDefault();
        $(".popup").css("display", "none");
    })

    // popup reviews

    $(".details-btn").on("click", e => {
        e.preventDefault();
        let resultTitle = $(e.currentTarget).siblings(".reviews__hover-text").find(".reviews__hover-title").text();
        let resultText = $(e.currentTarget).siblings(".reviews__hover-text").find(".reviews__hover-fulltext").text();
        popupTitle.text(resultTitle);
        popupText.text(resultText);
        $(".popup").css("display", "initial");

    })

    ///////////////////
    // map

    ymaps.ready(init);

    var placemarks = [
        {
            latitude: 60.020363,
            longitude: 30.321707,
            hintContent: '<div class="map__hint">пр. Энгельса, 69</div>',
            balloonContent: [
                '<div class="map__balloon-title">пр. Энгельса, 69</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 59.948568,
            longitude: 30.463866,
            hintContent: '<div class="map__hint">пр. Ударников, 15</div>',
            balloonContent: [
                '<div class="map__balloon-title">пр. Ударников, 15</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 59.915697,
            longitude: 30.483727,
            hintContent: '<div class="map__hint">пр. Товарищеский, 9</div>',
            balloonContent: [
                '<div class="map__balloon-title">пр. Товарищеский, 9</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 60.031634,
            longitude: 30.236637,
            hintContent: '<div class="map__hint">пр. Комендантский, 53/3</div>',
            balloonContent: [
                '<div class="map__balloon-title">пр. Комендантский, 53/3</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 60.015062,
            longitude: 30.332442,
            hintContent: '<div class="map__hint">ул. Дрезденская, 20</div>',
            balloonContent: [
                '<div class="map__balloon-title">ул. Дрезденская, 20</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        }
    ],

    geoObjects= [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [59.96, 30.32],
            zoom: 11,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../img/map/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
        }

        var clusterer = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: '../img/map/map-marker.svg',
                    size: [46, 57],
                    offset: [-23, -57]
                }
            ],
            clusterIconContentLayout: null
        });

        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }

})


