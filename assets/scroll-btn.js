const btnAnima = document.querySelector('#getTop');
const Anchor = document.querySelector('#about-me');
const AnchorEnd = document.querySelector('.footer')
const screenView = window.innerHeight;


function goTop() {
    const topoItem = Anchor.getBoundingClientRect().top;
    const fimPagina = AnchorEnd.getBoundingClientRect().top;
    const End = fimPagina - screenView <= 5;
    const visibleItem = topoItem - screenView < -800;
    // console.log(topoItem)

    if (visibleItem) {
        btnAnima.classList.add('show');
    } else{
        btnAnima.classList.remove('show')
    } if (End) {
        btnAnima.classList.remove('show')
    }
}



window.addEventListener('scroll', goTop);