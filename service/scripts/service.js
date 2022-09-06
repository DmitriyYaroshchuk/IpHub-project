$(function(){
    $('.services__inner').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="services__slick-prev">' +
            '<img src="../images/button-prev.svg" alt="button__prev">' +
            '</button>',
        nextArrow: '<button type="button" class="services__slick-next">' +
            '<img src="../images/button-next.svg" alt="button__prev">' +
            '</button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    dots:false,
                    slidesToScroll: 1,
                    infinite: true,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
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
let modalApplicationRegButton = document.querySelector('#modalApplicationRegButton');
let modalApplicationClose = document.querySelector('#modalApplicationClose');
let modalApplicationCurtain = document.querySelector('#modalApplicationCurtain')

modalApplicationButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
});
modalApplicationRegButton.addEventListener('click',function () {
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
})