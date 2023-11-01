const switchToogle = document.querySelector('.switch-toggle');
const icons =  switchToogle.querySelectorAll('.material-symbols-outline');

switchToogle.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme-variables');
    
    
    icons.forEach(spn => {
        spn.classList.toggle('switch-actived')
    })


})
    
let slides = document.querySelectorAll('.pdiv');
let index = 0;

function next() {
    slides[index].classList.remove('active')
    index = (index + 1 ) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


setInterval(next, 7000)