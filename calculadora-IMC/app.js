const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")


// função para aceitar somente números nos inputs
function somenteNumeros (e) {
    const charCode = e.charCode ? e.charCode : e.keyCode
    if(charCode != 8 && charCode !=9) {
        if(charCode < 48 || charCode > 57) {
            return false
        }
    }
}

function funcaoReduce (vAtual, pValor) {
    return vAtual + pValor
}

// máscaras de input
function mascaraPeso (e) {
    let input = e.target

    if(input.value.length === 2) {
        input.value += ","
    } 

    if (input.value.length === 5) {
        // transformando a string em array 
        let valor = input.value.split("") 
        // removendo a vírgula depois do segundo dígito
        valor.splice(2, 1) 
        // adcionando a vírgula depois do terceiro dígito 
        valor.splice(3,0, ",") 
        // transformando o array em uma string novamente
        let novoValor = valor.reduce(funcaoReduce)
        // atribuindo o novoValor ao input
        input.value = novoValor
    }
}

function mascaraAltura(e) {
    let valor = e.target
    if(valor.value.length == 1) {
       return valor.value += ","
    }
}

// atribuindo as funções ao evento onkeypress
inputPeso.onkeypress = somenteNumeros
inputPeso.addEventListener("keypress", mascaraPeso)

inputAltura.onkeypress = somenteNumeros
inputAltura.addEventListener("keypress", mascaraAltura)

// calculando o imc
function calcularImc() {
    let peso = inputPeso.value
    let altura = inputAltura.value

    function pontoPorVirgula() {
        let pesoArray = peso.split("")
        let alturaArray = altura.split("")

        if(pesoArray.length === 5) {
            pesoArray.splice(2, 1, ".")
            peso = Number(pesoArray.reduce(funcaoReduce))
        } else if(pesoArray.length === 6) {
            pesoArray.splice(3, 1, ".")
            peso = Number(pesoArray.reduce(funcaoReduce))
        }

        alturaArray.splice(1, 1, ".")
        altura = Number(alturaArray.reduce(funcaoReduce))
    }
    pontoPorVirgula()

    let calculado = peso / (altura * altura)
    let imc = calculado.toFixed(2)
    
    const resultado = document.querySelector("#resultado")
    resultado.innerText = imc
    
    const classificaco = document.querySelector("#classificacao")
    
    if(imc < 18.5) {
        classificaco.innerText = "Abaixo do peso ideal"
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificaco.innerText = "Peso ideal"
    } else if (imc >= 25 && imc <= 29.9) {
        classificaco.innerText = "Sobrepeso"
    } else if (imc >= 30 && imc <= 39.9) {
        classificaco.innerText = "Obesidade"
    } else if (imc >= 40) {
        classificaco.innerText = "Obesidade Grave"
    }
}

const calculo = document.getElementById("calcular")
calculo.onclick = e => {
    e.preventDefault()
    calcularImc()
}