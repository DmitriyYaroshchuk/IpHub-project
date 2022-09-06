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
let modalApplicationClose = document.querySelector('#modalApplicationClose');
let modalApplicationCurtain = document.querySelector('#modalApplicationCurtain')

modalApplicationButton.addEventListener('click',function () {
    modalApplication.classList.add('modal__active');
});
modalApplicationClose.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');
});
modalApplicationCurtain.addEventListener('click',function () {
    modalApplication.classList.remove('modal__active');
});