let numero = 0

const botoes = document.querySelectorAll(".btn")
const contador = document.querySelector("#contador")

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("subtrair")) {
            numero--
        } else if(btn.classList.contains("reiniciar")) {
            numero = 0
        } else if(btn.classList.contains("adicionar")) {
            numero++
        }

        contador.innerText = numero
        
        if(numero < 0 ) {
            contador.style.color = "#c21912"
        } else if(numero == 0) {
            contador.style.color = "#2c2c2c"
        } else if (numero > 0) {
            contador.style.color = "#06c258"
        }
    })
})