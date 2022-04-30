$(document).ready(function () {
    togglemenu('#menu');

    function togglemenu(target) {
        let menu = $(target).data('target');
        $('#menu').addClass('hidemenu');
        $('#togglemenu').on('click', function () {
            if ($(this).attr('id') == menu) {
                $(target).toggleClass('showmenu hidemenu');
                $(this).toggleClass('show');
            }
        })
    }

    $('.slider__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        asNavFor: '.slider__indicator',
        adaptiveHeight: true

    });
    $('.slider__indicator').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider__main',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });
});