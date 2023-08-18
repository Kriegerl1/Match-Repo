function menuShow() {
    let wrapper = document.querySelector('.r-menu-content');
    if(wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        }else{
            wrapper.classList.add('open');
    }
}