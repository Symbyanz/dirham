$(document).ready(function () {
    //_____ 𝔅𝔢𝔤𝔦𝔫 header menu [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('-active');
        $('body').toggleClass('-lock');
    })
    //_____ 𝔈𝔫𝔡 header menu [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____

    //_____ 𝔅𝔢𝔤𝔦𝔫 all sliders on page [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____
    $('.listing__slider').owlCarousel({
        center: true,
        margin: 10,
        loop: true,
        autoWidth: true,
    });

    $('.crypto__slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        items: 1,
    });

    $('.tap__slider-container').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        center: true,
        items: 3,
    });
    //_____ 𝔈𝔫𝔡 all sliders on page [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____

    //_____ 𝔅𝔢𝔤𝔦𝔫 scroll for header [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____
    $(function () {
        let header = $('.header');

        // offsets for blocks
        let headerTop = $('.section__listing').offset().top;
        let cryptoTop = $('.section__crypto').offset().top;
        let tapTop = $('.section__tap').offset().top;
        let roadmapTop = $('.section__roadmap').offset().top;
        let risksTop = $('.section__risks').offset().top;
        let partnersTop = $('.section__partners').offset().top;
        let footerTop = $('.footer').offset().top;

        // menu links
        let cryptoLink = $('.header__link.-crypto');
        let tapLink = $('.header__link.-tap');
        let roadmapLink = $('.header__link.-roadmap');
        let risksLink = $('.header__link.-risks');
        let partnersLink = $('.header__link.-partners');


        $(window).scroll(function () {
            let position = $(this).scrollTop();
            // for -fixed 
            if (position > 1) {
                header.addClass('-fixed');
            } else {
                header.removeClass('-fixed');
            }
            // for -active
            menuOffset(position);
        });

        $('button[href^="#"]').click(function () {
            var elementClick = $(this).attr("href");

            // for mobile versions
            $('.header__burger,.header__menu').removeClass('-active');
            $('body').removeClass('-lock');

            var destination = $(elementClick).offset().top - 50;
            $("html:not(:animated), body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });


        menuOffset = function (pos) {
            // height header
            let position = pos + 70;
            if (position > partnersTop) {
                $('.header__link').removeClass('-active');
                partnersLink.addClass('-active');
            } else if (position > risksTop) {
                $('.header__link').removeClass('-active');
                risksLink.addClass('-active');
            } else if (position > roadmapTop) {
                $('.header__link').removeClass('-active');
                roadmapLink.addClass('-active');
            } else if (position > tapTop) {
                $('.header__link').removeClass('-active');
                tapLink.addClass('-active');
            } else if (position > cryptoTop) {
                $('.header__link').removeClass('-active');
                cryptoLink.addClass('-active');
            } else {
                $('.header__link').removeClass('-active');
            }
        }
    });
    //_____ 𝔈𝔫𝔡 scroll for header [𝔰𝔶𝔪𝔟𝔶𝔞𝔫𝔷] _____



})
