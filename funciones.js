document.addEventListener('DOMContentLoaded', function() {
    var sideMenu = document.getElementById('side-menu');
    var nav = document.querySelector('.nav');

    sideMenu.addEventListener('change', function() {
        nav.style.maxHeight = this.checked ? '100%' : '0';
    });

  
    const carousel = new bootstrap.Carousel('#myCarousel')
});
