var foto = document.getElementById("foto");

foto.addEventListener("mouseover", () => {
    foto.setAttribute("src", "foto2.png");
})

foto.addEventListener("mouseleave", () => {
    foto.setAttribute("src", "foto1.png");
})