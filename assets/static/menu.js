function menuShow() {
    let wrapper = document.querySelector('.r-menu-content');
    if(wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        document.querySelector('ion-icon').name = "menu-outline";
    }else{
        wrapper.classList.add('open');
        document.querySelector('ion-icon').name = "close-outline";
    }
}