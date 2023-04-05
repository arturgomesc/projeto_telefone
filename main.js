const listaDeTeclas = document.querySelectorAll('.teclado_numbers');
const inputTel = document.querySelector('input[type=tel]');

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    tecla.onclick = () => {
        inputTel.value += tecla.value;
    }
}

const teclaChamada = document.querySelector('.centralizar');
teclaChamada.onclick = () => {
    inputTel.value += '...';
}