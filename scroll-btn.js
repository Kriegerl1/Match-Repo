const btnAnima = document.querySelector('#getTop');
const Anchor = document.querySelector('#about-me');
const screenView = window.innerHeight;

console.log(screenView)

function goTop() {
    const topoItem = Anchor.getBoundingClientRect().top;
    const visibleItem = topoItem - screenView < -300;
    // console.log(topoItem)

    if (visibleItem){
        btnAnima.classList.add('show');
    }else{
        btnAnima.classList.remove('show')
    }
}

window.addEventListener('scroll', goTop);