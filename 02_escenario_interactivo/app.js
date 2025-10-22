const finit = document.querySelectorAll('.soldado');
const enemigo = document.querySelectorAll('.enemigo');
const salto = document.querySelectorAll('.salto');
let counter = 0;

console.log(finit, enemigo, salto);



salto.forEach(item => {

    item.addEventListener('click', () => {
        item.classList.add('salto');   

    });
})




