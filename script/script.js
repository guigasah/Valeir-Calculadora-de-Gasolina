

const inputdistance = document.getElementById("distance");
const inputgas = document.getElementById("gas");
const inputconsumo = document.getElementById("consumo")



function calcular() {
    let distance = inputdistance.value;
    let gas = inputgas.value;
    let consumo = inputconsumo.value;

    let calcgas = gas / consumo * (distance)
    console.log(calcgas)

    resultado.innerHTML = `<p>${Math.ceil(calcgas)} Reais você vai gastar para ir até lá!</p>`
}


//Função pra limpar os campos preenchidos e o Resultado
function limpar() {
    resultado.innerHTML = "";
    inputconsumo.value = "";
    inputdistance.value = "";
    inputgas.value = "";
}

   function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }
