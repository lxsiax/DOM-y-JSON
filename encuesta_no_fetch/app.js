var radios = document.querySelectorAll("input[type='radio']");

document.addEventListener("DOMContentLoaded", function(){

    radios.forEach(radio => {
        radio.addEventListener("click", function(){
            havotado(radio.value)
        });
    });
    
})

function havotado(equipo){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `encuesta_voto.php?equipo=${encodeURIComponent(equipo)}`, true);

    xhr.addEventListener('readystatechange', () => {

        if(xhr.readyState == 4 && xhr.status == 200){

            var votaciones = xhr.responseText;
            var res = votaciones.split("||");
            var votos_madrid = parseFloat(res[0]);
            var votos_barcelona = parseFloat(res[1]);
            var votos_atletico = parseFloat(res[2]);
            var votos_sevilla = parseFloat(res[3]);
            var total = 0;
            for (let index = 0; index < res.length; index++) {
                total += parseFloat(res[index]);
            }
            
            var votos = {
                madrid: votos_madrid,
                barcelona: votos_barcelona,
                atletico: votos_atletico,
                sevilla: votos_sevilla
            }

            radios.forEach(radio => {
                document.getElementById("ba"+radio.value).value=(100*(votos[radio.value]/total))/100;
            });
            
        }
    })

    xhr.send();
}