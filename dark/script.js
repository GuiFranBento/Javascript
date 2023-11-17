const switchToogle = document.querySelector('.switch-toggle');
const icons =  switchToogle.querySelectorAll('.material-symbols-outline');
const input = document.getElementById("input-busca")
switchToogle.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme-variables');
    
    
    icons.forEach(spn => {
        spn.classList.toggle('switch-actived')
    })







})
    
function botaoDeBusca (){
    const inputValue = input.value;
    
    movimentoInput(inputValue);
}


function fecharInput(){
    input.style.visibility = 'hidden';
    input.style.width = '40px';
    input.style.padding = '0.5rem 0.5rem 0.5rem 2.6rem';
    input.style.transition = 'all 0.5s ease-in-out 0s'
    input.value = "";
  
}

function abrirInput(){
    input.style.visibility = 'visible';
    input.style.width = '159px';
    input.style.padding = '0.5rem 0.5rem 0.5rem 3.1rem';
    input.style.transition = 'all 0.5s ease-in-out 0s'
    input.value = "";
   
}

function movimentoInput(inputValue){
   const visibility = input.style.visibility;
    /* visibility == 'hidden' ? abrirInput() : fecharInput(); */
    //console.log(inputValue)

   inputValue && procurarCidade(inputValue) ;
    
    if (visibility == "hidden"){
        abrirInput()
    }
    else {
        fecharInput()
    }

}

document.addEventListener('DOMContentLoaded', () => {
    fecharInput();
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