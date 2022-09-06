$(function(){
    $('.decision__sss').slick({
        dots:false,
        slidesToShow: 5.1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="decision__slick-prev">' +
            '<img src="images/button-prev.svg" alt="button-prev">' +
            '</button>',
        nextArrow: '<button type="button" class="decision__slick-next">' +
            '<img src="images/button-next.svg" alt="button-next">' +
            '</button>',
         responsive: [
            {
              breakpoint: 1920,
              settings: {
                 dots:false,
                 slidesToScroll: 1,
                 infinite: false,
                 slidesToShow: 5.1,

              }
            },

            {
                breakpoint: 1001,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 3,

                }
            },
            {
                 breakpoint: 481,
                 settings: {
                 slidesToScroll: 1,
                 slidesToShow: 2,

                 }
            },
            {
                 breakpoint: 361,
                 settings: {
                 slidesToScroll: 1,
                 slidesToShow: 1,

                 }
            }
         ]
    });
});

new Swiper ('.test__block',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return ' <span class="' + currentClass + '"></span>' + '/' +
            '<span class="' + totalClass + '"></span>'
        }

    }


});

$(function(){
    $('.cases__slider').slick({
        dots:false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,

        prevArrow: '<button type="button" class="cases__slick-prev">' +
            '<img src="images/button-prev.svg" alt="button-prev">' +
            '</button>',
        nextArrow: '<button type="button" class="cases__slick-next">' +
            '<img src="images/button-next.svg" alt="button-next">' +
            '</button>',
         responsive: [
            {
              breakpoint: 1920,
              settings: {
                 slidesToScroll: 1,
                 slidesToShow: 2.5

              }
            },
            {
                breakpoint: 1001,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 2

                }
            },
            {
                breakpoint: 769,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1
                }
            },
            {
                breakpoint: 361,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1

                }
            }

          ]
    });
});

$(function(){
    $('.workers__slider').slick({
        dots:false,
        slidesToShow: 5.1,
        slidesToScroll: 1,
        infinite: false,

        prevArrow: '<button type="button" class="workers__slick-prev">' +
            '<img src="images/button-prev.svg" alt="button-prev">' +
            '</button>',
        nextArrow: '<button type="button" class="workers__slick-next">' +
            '<img src="images/button-next.svg" alt="button-next">' +
            '</button>',
         responsive: [
            {
              breakpoint: 1920,
              settings: {
                 dots:false,
                 slidesToScroll: 1,
                 infinite: false,
                 slidesToShow: 5.1
              }
            },
            {
                 breakpoint: 1001,
                 settings: {
                 slidesToScroll: 1,
                 slidesToShow: 3
                 }
            },
            {
                  breakpoint: 481,
                  settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2
                  }
            },
            {
                  breakpoint: 361,
                  settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
                  }
            }
          ]
    });
});
let modal = document.querySelector('#modal');
let modalButton = document.querySelector('#modalButton');
let modalClose = document.querySelector('#modalClose');
let modalCurtain = document.querySelector('#modalCurtain')

modalButton.addEventListener('click',function () {
    modal.classList.add('modal__active');
})
modalClose.addEventListener('click',function () {
    modal.classList.remove('modal__active');

})
modalCurtain.addEventListener('click',function () {
    modal.classList.remove('modal__active');

})
let modalApplication = document.querySelector('#modalApplication');
let modalApplicationButton = document.querySelector('#modalApplicationButton');
let modalApplicationIntelligenceButton = document.querySelector('#modalApplicationIntelligenceButton');
let modalApplicationConsultationButton = document.querySelector('#modalApplicationConsultationButton');
let modalApplicationClose = document.querySelector('#modalApplicationClose');
let modalApplicationCurtain = document.querySelector('#modalApplicationCurtain')

modalApplicationButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
})

modalApplicationIntelligenceButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
})

modalApplicationConsultationButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
})

modalApplicationClose.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');

})
modalApplicationCurtain.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');

})
