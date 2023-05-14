const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const imgTrocaTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {

	const modoEscuroAtivo = body.classList.contains("modo-escuro")

	body.classList.toggle("modo-escuro")

	if (modoEscuroAtivo) {
		imgTrocaTema.setAttribute("src", "./src/imagens/sun.png")
	}
	else {
		imgTrocaTema.setAttribute("src", "./src/imagens/moon.png")
	}
})

