const menu = document.querySelector('.header-menu');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


// isso aqui é um otimizador de eventos
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// isso aqui é a animação do menu
const activeScroll = () =>{
    menu.classList.toggle('ativo', scrollY>10);
}
const desactiveScroll = ()=>{
    menu.classList.toggle('inativo', scrollY<=10);
}
window.addEventListener('scroll', desactiveScroll);
window.addEventListener('scroll', activeScroll);

//isso aqui é a animação dos elementos
const animeScroll = () =>{
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}
if(target.length){
    window.addEventListener('scroll', debounce(function(){
            animeScroll();
    }, 200));
}


function iniciaModal (modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {

            if(e.target.id == modalID || e.target.className == 'fechar' ){
                modal.classList.remove('mostrar');
            }
        });
    }
    
}

const foto1 = document.querySelector('.imagem1');
const foto2 = document.querySelector('.imagem2');

foto1.addEventListener('click',() => iniciaModal('modal-portfolio1'));
foto2.addEventListener('click',() => iniciaModal('modal-portfolio2'));