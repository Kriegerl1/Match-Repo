function fade() {
    var uiFade = document.querySelectorAll('.fade');

    for (var i = 0; i < uiFade.length; i++) {
        var userView = window.innerHeight;
        var userUiView = uiFade[i].getBoundingClientRect().top;
        var uiFadeCounter = 20;

        if (userUiView < userView - uiFadeCounter) {
            uiFade[i].classList.add('active');
        }
    }
}


function pageLoad() {
    fade();
    window.addEventListener('scroll', fade);
}
window.addEventListener('load', pageLoad);