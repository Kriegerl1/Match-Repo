function fade() {
    var uiFade = document.querySelectorAll('.fade');

    for (var i = 0; i < uiFade.length; i++) {
        var userView = window.innerHeight;
        var userUiView = uiFade[i].getBoundingClientRect().top;
        var uiFadePoint = 40;

        if (userUiView < userView - uiFadePoint) {
            uiFade[i].classList.add('active');
        }else{
            uiFade[i].classList.remove('active');
        }
    }
}

function pageLoad() {
    fade();
    window.addEventListener('scroll', fade);
}

window.addEventListener('load', pageLoad);