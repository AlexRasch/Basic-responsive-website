var swiper;

window.addEventListener('DOMContentLoaded', (event) => {

    fnInitSwipper();
});


function fnInitSwipper() {
    swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
    });
}
