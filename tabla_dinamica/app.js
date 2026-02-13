var agregar = document.getElementById("agregar");
var tarea = document.getElementById("tarea");
var lista = document.getElementById("lista");

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    var li = document.createElement("li");
    li.textContent = tarea.value;

    li.addEventListener("dblclick", () => {
        var input = document.createElement("input");

        input.addEventListener("keydown", (e) => {
            if(e.key == "Enter") {
                li.textContent = input.value;
                lista.replaceChild(li, input);
                li.appendChild(boton);
            }
        })
        lista.replaceChild(input, li);
    })

    var boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "red";
    boton.textContent = "Borrar tarea";
    boton.style.marginLeft = "5px"
    boton.style.color = "white";

    boton.addEventListener("click", () => {
        lista.removeChild(li);
    })

    li.appendChild(boton);

    lista.appendChild(li);
})