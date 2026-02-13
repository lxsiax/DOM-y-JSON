var agregar = document.getElementById("agregar");
var form = document.getElementById("form");
var nombre = document.getElementById("nombre");
var precio = document.getElementById("precio");
var imagen = document.getElementById("imagen");

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    var inputs = form.querySelectorAll("input");
    var div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = '200px';
    div.style.margin = "10px"
    div.style.height = '250px';

    var img = document.createElement("img");
    img.src = imagen.value;
    img.style.width = '170px'
    img.style.height = '150px'
    div.appendChild(img);

    var h2 = document.createElement("h2");
    h2.textContent = nombre.value;
    div.appendChild(h2);

    var p = document.createElement("p");
    p.textContent = precio.value + "€";
    div.appendChild(p);

    document.body.appendChild(div);
})