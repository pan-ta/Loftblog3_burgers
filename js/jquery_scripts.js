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
            latitude: 59.97,
            longitude: 30.31,
            hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
            balloonContent: [
                '<div class="map__balloon-title">ул. Литераторов, д. 19</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 59.94,
            longitude: 30.25,
            hintContent: '<div class="map__hint">Малый проспект ВО, д. 64</div>',
            balloonContent: [
                '<div class="map__balloon-title">Малый проспект ВО, д. 64</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        },
        {
            latitude: 59.93,
            longitude: 30.34,
            hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
            balloonContent: [
                '<div class="map__balloon-title">наб. реки Фонтанки, д. 56</div>',
                '<div class="map__balloon-desc">Самые вкусные бургеры у нас!</div>'
            ]
        }
    ],

    geoObjects= [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [59.94, 30.32],
            zoom: 12,
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


