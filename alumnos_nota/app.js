var contador = 0;
var alumnos = [];
while(contador<5)
{
    var alumno = prompt('Introduce el nombre del alumno: ');
    var mates = prompt(`Introduce la nota en matemáticas de ${alumno}: `);
    var lengua = prompt(`Introduce la nota en lengua de ${alumno}: `)
    var quimica = prompt(`Introduce la nota en matemáticas de ${alumno}: `);

    alumnos.push([alumno, [mates,lengua,quimica]]);
    contador++;
}

function crearTabla() 
{
    var tabla = document.createElement("tabla");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var tbody = document.createElement("tbody");

    var claves = ["Alumno", "Nota matemáticas", "Nota lengua", "Nota química"];

    claves.forEach(clave => {
        var td = document.createElement("td");
        td.textContent = clave;
        tr.appendChild(td);
    });

    alumnos.forEach(alumno => {
        var fila = document.createElement("tr");
        var td = document.createElement("td");
        td.textContent = alumno[0];
        fila.appendChild(td);
        alumno[1].forEach(nota => {
            var columna = document.createElement("td");
            columna.textContent = nota;
            fila.appendChild(columna);
        });
        tbody.appendChild(fila);
    });

    thead.appendChild(tr);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}

crearTabla();