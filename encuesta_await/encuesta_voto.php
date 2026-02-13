<?php 
$fichero = "resultados.txt";
$contenido = file($fichero);

$array = explode("||", $contenido[0]);
$madrid = $array[0];
$barcelona = $array[1];
$atletico = $array[2];
$sevilla = $array[3];

$equipo = $_GET['equipo'];

switch ($equipo) {
    case 'madrid':
        $madrid++;
        break;
    case 'barcelona':
        $barcelona++;
        break;
    case 'atletico':
        $atletico++;
        break;
    case 'sevilla':
        $sevilla++;
        break;
    default:
        break;
}

$metervoto = $madrid."||".$barcelona."||".$atletico."||".$sevilla;

$fp = fopen($fichero,"w");
fputs($fp, $metervoto);
fclose($fp);

echo($metervoto);
?>