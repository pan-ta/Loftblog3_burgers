window.onload = function(){

    //////////////////////
    // hamburger

    const hamburgerButton = document.querySelector(".hamburger__button");
    const hamburgerOverlay = document.querySelector(".hamburger__overlay");
    const hamburgerClose = document.querySelector(".hamburger__close");
    

    hamburgerButton.addEventListener("click", function(e){
        e.preventDefault();
        hamburgerOverlay.style.display = "initial";
    })

    hamburgerClose.addEventListener("click", function(e){
        e.preventDefault();
        hamburgerOverlay.style.display = "none";
    })

    /////////////////////////
    // burgers ingredients

    const ingredientsButton = document.querySelector(".burgers__ingredients-button");
    const ingredientsList = document.querySelector(".burgers__ingredients-content");

    ingredientsButton.addEventListener("click", function(e){
        e.preventDefault();
        ingredientsList.classList.toggle("invisible");
        
    })


    //////////////////////
    // menu-acco

    // var menuAccoTrigger = document.querySelector(".menu__acco-trigger");
    // var menuAccoItemContainer = document.querySelector(".menu__acco-item");

    // menuAccoTrigger.addEventListener("click", function(e){
    //     e.preventDefault();
    //     menuAccoItemContainer.classList.toggle(".menu__acco-item_active");
    // })

    var menuAccoTrigger = document.querySelector("#trigger1");
    var menuAccoItemContainer = document.querySelector("#item1");

    menuAccoTrigger.addEventListener("click", function(e){
        e.preventDefault();
        menuAccoItemContainer.classList.remove(".menu__acco-item_active");
    })


    ////////////////////////////
    // popup

    const myButton = document.querySelector(".logo");
    const popupWindow = document.querySelector(".popup");
    const popupTitle = document.querySelector(".popup__title");
    const popupText = document.querySelector(".popup__desc");
    const popupClose = document.querySelector(".popup__close");

    // popup test

    myButton.addEventListener("click", function(e){
        e.preventDefault();
        popupWindow.style.display = "initial";
        popupTitle.textContent = "Не ожидали??";
        popupText.textContent = "А я тут проверяю поп-ап. Как Вам поп-ап?";

    })

    popupClose.addEventListener("click", function(e){
        e.preventDefault();
        popupWindow.style.display = "none";
    })

    // popup reviews



    ///////////////////////////////
    // burgers slider

    var burgersSlider = document.querySelector(".burgers__list");
    var burgersSliderItem = document.querySelector(".burgers__item");
    var burgersSliderItemStyle = getComputedStyle(burgersSliderItem);
    var burgersSliderLeftbtn = document.querySelector("#burgersArrowLeft");
    var burgersSliderRightbtn = document.querySelector("#burgersArrowRight");
    const minRight = 0;
    const step = parseInt(burgersSliderItemStyle.width);
    const maxRight = step*3;
    let currentRight = 0;

    burgersSliderRightbtn.addEventListener("click", function(e){
        e.preventDefault();
        if(currentRight < maxRight){
            currentRight += step;
            burgersSlider.style.right = currentRight + "px";
        }
    }) 





}


