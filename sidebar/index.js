const botaoMenu = document.querySelector(".botaoMenu")
        const menu = document.querySelector(".sidebar")
        const botaoFechar = document.querySelector(".botaoFechar")

        botaoMenu.addEventListener("click", () => {
            menu.classList.add("mostrarSidebar")
            botaoMenu.classList.add("ocultarBotao")
        })

        botaoFechar.addEventListener("click", () => {
            menu.classList.remove("mostrarSidebar")
            botaoMenu.classList.remove("ocultarBotao")
        })