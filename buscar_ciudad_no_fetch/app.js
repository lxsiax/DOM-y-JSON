document.addEventListener("DOMContentLoaded", () => {
    var buscador = document.getElementById("buscador");
    var resultado = document.getElementById("resultado");

    buscador.addEventListener("keydown", () => {
        var palabra = buscador.value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `ciudades_sugerencias.php?content=${encodeURIComponent(palabra)}`, true);
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var datos = JSON.parse(xhr.responseText);

                resultado.innerHTML = ''

                datos.forEach(ciudad => {
                    var li = document.createElement("li");
                    li.textContent = ciudad;
                    resultado.appendChild(li);
                });

            }
        })
        xhr.send();
    })
})