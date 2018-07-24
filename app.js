const inputTexto = document.querySelector('input');

const btnClick = document.querySelector('button');

const counter = document.querySelector('span');

/*elemento que se va a afectar.addEventListener, evento, 
funcion (el tipo de evento es lo que cambia)*/

btnClick.disabled = true;
inputTexto.addEventListener('input', () => {
  if (inputTexto.value.length > 0) {
    btnClick.disabled = false;
  } else {
    btnClick.disable = true;
  }
}
)

inputTexto.addEventListener('keydown', () => {
  inputTexto.value
  counter.innerHTML = 250 - inputTexto.value.length;
})