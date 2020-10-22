$(document).ready(function () {
    $('.main__slider-container').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow: 1,
        speed: 1,
        easing: 'default',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,

    });
});


