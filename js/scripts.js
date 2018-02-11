window.onload = function(){
    var hamburgerButton = document.querySelector(".hamburger__button");
    var hamburgerOverlay = document.querySelector(".hamburger__overlay");
    console.log(hamburgerButton);

    hamburgerButton.addEventListener("click", function(e){
        e.preventDefault();
        hamburgerOverlay.style.display = "initial";

    })
}
