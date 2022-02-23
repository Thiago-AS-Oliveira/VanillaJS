const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btnTrocarCor = document.getElementById("trocarCor")

function hexadecimal() {
    let background = document.querySelector("body").style
    let nomeCor = document.querySelector("#nomeCor span")
    let cor = "#"
    
    for(let i = 0; i < 6; i++) {
        cor =  cor + hex[Math.floor(Math.random() * hex.length)]
    }

    background.backgroundColor = cor
    nomeCor.innerText = cor
    nomeCor.style.color = cor
}


btnTrocarCor.addEventListener("click", hexadecimal)