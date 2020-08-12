// scroll reveal
ScrollReveal().reveal('.reveal', {delay: 500});
ScrollReveal().reveal('.reveal-1000', {delay: 1000});

//vars 

const btns = document.querySelectorAll('.box-btn');
const closeIcon = document.querySelector('.fa-times');

btns.forEach(btn => {
    btn.addEventListener('click', showModal);
});

closeIcon.addEventListener('click', closeModal);

function showModal(e) {
    const headerHeadline =e.currentTarget.parentElement.children[0].children[0].textContent;
    const modalHeader = document.querySelector('.modal-header h1');
    modalHeader.textContent = headerHeadline;
    document.body.classList.add('show-modal');
}

function closeModal() {
    document.body.classList.remove('show-modal');
}