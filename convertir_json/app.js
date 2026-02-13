document.addEventListener("DOMContentLoaded", function(){
    var boton = document.getElementById("boton");
    var div = document.getElementById("div1");

    boton.addEventListener("click", () => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'mostrar.php', true);

        xhr.addEventListener("readystatechange", () => {
            if(xhr.readyState==4 && xhr.status==200){
                let datos = JSON.parse(xhr.responseText);
                datos.departamento.trabajador.forEach(dato => {
                const p = document.createElement("p");
                p.textContent = dato.nombre +dato.apellidos
                div.appendChild(p);
            });
            }
        })
        xhr.send();
    })
})