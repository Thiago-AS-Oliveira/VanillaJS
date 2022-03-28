const botaoMenu = document.querySelector(".botaoMenu")

botaoMenu.addEventListener("click", () => {
    let navMenu = document.querySelector("header")
    navMenu.classList.toggle("exibirLinks")
})