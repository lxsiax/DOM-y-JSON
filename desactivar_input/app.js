var todos = document.getElementById("todos");
var uno = document.getElementById("uno");

var inputs = document.querySelectorAll("input");

todos.addEventListener("click", () => {
    inputs.forEach(input => {
        input.disabled = true;
    }); 
});

uno.addEventListener("click", () => {
    var entrada = prompt("¿Qué input quieres desactivar?");
    var desactivar = document.getElementById(entrada);
    if (desactivar.disabled)
    {
        desactivar.disabled = false;
    } else {
        desactivar.disabled = true;
    }
});