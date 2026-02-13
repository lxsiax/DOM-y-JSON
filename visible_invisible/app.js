var boton = document.getElementById("ocultar");

boton.addEventListener("click", () => {
    var parrafo = parseInt(prompt("Introduce el número del párrafo a ocular (1,2,3...): "));
    var p = document.getElementById(parrafo);
    if(p.className == "novisible")
        {
            p.className = "mostrado";
        }  else 
        {
            p.className = "novisible";
        }
})