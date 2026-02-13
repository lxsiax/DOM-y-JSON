var tbody = document.getElementById("tbody");
var agregar = document.getElementById("agregar");

agregar.addEventListener("click", () => {
    var tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        td.textContent = "Doble click para editar";

        td.addEventListener("dblclick", () => {
            let input = document.createElement("input");
            input.type = "text";
            input.value = td.textContent;
            var original = td.textContent;
            td.textContent = "";
            td.appendChild(input);

            input.addEventListener("keydown", (e) => {
                if (e.key == "Enter") {
                    td.textContent = input.value;
                    td.removeChild(input);
                } else if (e.key == "Escape") {
                    td.textContent = original;
                    td.removeChild(input);
                }
            });

            input.addEventListener("blur", () => {
                td.textContent = input.value;
                td.removeChild(input);
            })
        });

        tr.appendChild(td);
    }

    var boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Borrar fila";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
    
    boton.addEventListener("click", () => {
        tbody.removeChild(tr);
    })

    tr.appendChild(boton);

    tbody.appendChild(tr);
});
