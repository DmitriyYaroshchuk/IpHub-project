$(function(){
    $('.company__container').slick({
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4.5,
        infinite: false,
        arrows: false,
        initialSlide: 2.8,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4.5
                }
            },
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 2.6,
                    centerMode: true
                }
            },
            {
                breakpoint: 787,
                settings: {
                    initialSlide: 2.9,
                    centerMode: true,
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    initialSlide: 2.58,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 361,
                settings: {
                    initialSlide: 4,
                    centerMode: true,
                    slidesToShow: 1
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

let modal = document.querySelector('#modal');
let modalButton = document.querySelector('#modalButton');
let modalClose = document.querySelector('#modalClose');
let modalCurtain = document.querySelector('#modalCurtain')

modalButton.addEventListener('click',function () {
    modal.classList.toggle('modal__active');
});
modalClose.addEventListener('click',function () {
    modal.classList.remove('modal__active');
});
modalCurtain.addEventListener('click',function () {
    modal.classList.remove('modal__active');
});

let modalApplication = document.querySelector('#modalApplication');
let modalApplicationButton = document.querySelector('#modalApplicationButton');
let modalApplicationRequestButton = document.querySelector('#modalApplicationRequestButton');
let modalApplicationRegisterButton = document.querySelector('#modalApplicationRegisterButton');
let modalApplicationClose = document.querySelector('#modalApplicationClose');
let modalApplicationCurtain = document.querySelector('#modalApplicationCurtain')

modalApplicationButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
});
modalApplicationRegisterButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
});
modalApplicationRequestButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
});
modalApplicationClose.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');
});
modalApplicationCurtain.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');
});



const wrapper = document.querySelectorAll(".accordion__wrapper");

wrapper.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
    })
})
