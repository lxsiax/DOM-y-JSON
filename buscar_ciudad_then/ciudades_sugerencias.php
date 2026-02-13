<?php
$resultado = mb_strtolower(isset($_GET["content"]) ? $_GET["content"] : '');

//Esta funcion lo que hace es leer el contenido y lo devuelve como cadena
$json = file_get_contents('datos.json');


$datos = json_decode($json, true);

$resultados = [];

foreach ($datos['Ciudades'] as $ciudad) {
    // strtolower para no importar mayúsculas/minúsculas
    if (strpos(mb_strtolower($ciudad['nombre']), $resultado) !== false) {
        $resultados[] = $ciudad['nombre'];
    }
}

echo (json_encode($resultados));
