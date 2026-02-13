var formulario = document.getElementById("form");
var agregar = document.getElementById("agregar");
var tbody = document.getElementById("tbody");

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    var tr = document.createElement("tr");
    var inputs = formulario.querySelectorAll("input");
    inputs.forEach(input => {
        var td = document.createElement("td");
        td.textContent = input.value;
        tr.appendChild(td);
    });
    var boton_borrar = document.createElement("button");
    boton_borrar.type = "button";
    boton_borrar.textContent = "Borrar usuario"

    boton_borrar.addEventListener("click", () => {
        tbody.removeChild(tr);
    });
    
    tr.appendChild(boton_borrar)
    tbody.appendChild(tr);
})