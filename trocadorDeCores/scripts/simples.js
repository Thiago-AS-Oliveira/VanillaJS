const cores = ["green", "red", "rgba(133,122,200)", "#f15025", "rgb(18,10,143)"]
const btnTrocarCor = document.getElementById("trocarCor")

function corAleatoria() {
    let background = document.querySelector("body").style
    let nomeCor = document.querySelector("#nomeCor span")
    let cor  = cores[Math.floor(Math.random() * cores.length)]

    background.backgroundColor = cor
    nomeCor.innerText = cor
    nomeCor.style.color = cor
}

btnTrocarCor.addEventListener("click", corAleatoria)