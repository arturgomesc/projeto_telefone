const listaDeTeclas = document.querySelectorAll('[tec-tecla]');
const inputTel = document.querySelector('input[type=tel]');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    tecla.onclick = () => {
        inputTel.value += tecla.value;
    }

}

function makeCall(event) {
    event.preventDefault();
    console.log("Making a call...")
}

function backspace() {
    inputTel.value = inputTel.value.slice(0, -1);
}
