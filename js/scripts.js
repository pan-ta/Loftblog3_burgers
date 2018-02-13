window.onload = function(){

    //////////////////////
    // hamburger

    var hamburgerButton = document.querySelector(".hamburger__button");
    var hamburgerOverlay = document.querySelector(".hamburger__overlay");
    console.log(hamburgerButton);

    hamburgerButton.addEventListener("click", function(e){
        e.preventDefault();
        hamburgerOverlay.style.display = "initial";
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
    // reviews popup

    
}


