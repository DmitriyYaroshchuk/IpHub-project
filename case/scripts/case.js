$(function(){
    $('.content-task__slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="content-task__slick-prev">' +
            '<img src="../images/button-prev.svg" alt="button__prev">' +
            '</button>',
        nextArrow: '<button type="button" class="content-task__slick-next">' +
            '<img src="../images/button-next.svg" alt="button__prev">' +
            '</button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    dots:false,
                    slidesToScroll: 1,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})
$(function(){
    $('.content-result__slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="content-result__slick-prev">' +
            '<img src="../images/button-prev.svg" alt="button__prev">' +
            '</button>',
        nextArrow: '<button type="button" class="content-result__slick-next">' +
            '<img src="../images/button-next.svg" alt="button__prev">' +
            '</button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    dots:false,
                    slidesToScroll: 1,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(function(){
    $('.cases__wrapper-slider').slick({
        dots: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="cases__slick-prev">' +
            '<img src="../images/button-prev.svg" alt="button__prev">' +
            '</button>',
        nextArrow: '<button type="button" class="cases__slick-next">' +
            '<img src="../images/button-next.svg" alt="button__prev">' +
            '</button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    dots:false,
                    slidesToScroll: 1,
                    infinite: false,
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            }
            // {
            //     breakpoint: 361,
            //     settings: {
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
});