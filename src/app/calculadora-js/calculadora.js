function sumar() {
  let num1 = parseFloat(document.getElementById("num1").value); 
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 + num2;
  document.getElementById("resultado").value = resultado;
}

function restar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 - num2;
  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 * num2;
  document.getElementById("resultado").value = resultado;
}

function dividir() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultadoInput = document.getElementById("resultado");
  let parrafoExistente = document.getElementById("parrafo");
  if (parrafoExistente) {
    parrafoExistente.remove();  
  }

  if (num2 === 0) {
    let parrafo = document.createElement("p");
    parrafo.id = "parrafo";
    resultadoInput.insertAdjacentElement('afterend', parrafo);
    parrafo.innerText = "No se puede dividir entre cero";
    resultadoInput.value = "";
  } else {
    let resultado = num1 / num2;
    resultadoInput.value = resultado;
  }
}

document.getElementById("despejar").addEventListener("click", function() {
  let parrafoExistente = document.getElementById("parrafo");
  if (parrafoExistente) {
    parrafoExistente.remove();
  }
});
