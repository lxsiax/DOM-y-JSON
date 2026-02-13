document.addEventListener("DOMContentLoaded", () => {
    var buscador = document.getElementById("buscador");
    var resultado = document.getElementById("resultado");

    buscador.addEventListener("keydown", async () => {
        var palabra = buscador.value;

        const response = await fetch(`ciudades_sugerencias.php?content=${encodeURIComponent(palabra)}`)
        const datos = await response.json();

        resultado.innerHTML = '';

        datos.forEach(ciudad => {
            var li = document.createElement("li");
            li.textContent = ciudad;
            resultado.appendChild(li);
        });
    })
})