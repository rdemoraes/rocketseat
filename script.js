function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-raphael-light.png")
    img.setAttribute(
      "alt",
      (alt =
        "Foto de Raphael Moraes sorrindo, usando oculos e camisa branca, barba e fundo amarelo.")
    )
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-raphael.png")
    img.setAttribute(
      "alt",
      (alt =
        "Foto de Raphael Moraes sorrindo, usando oculos e camisa branca, barba e fundo degrade.")
    )
  }
}
