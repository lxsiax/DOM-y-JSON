document.addEventListener("DOMContentLoaded", iniciar);
function iniciar(){    
let input = document.getElementById('buscador');
let sugerencia = document.getElementById('resultado')

    input.addEventListener('input',()=>{
        let xhr = new XMLHttpRequest;
        xhr.open('GET',`ciudades_sugerencias.php?content=${encodeURIComponent(input.value)}`,true)
        xhr.addEventListener('readystatechange',()=>{

            if(xhr.readyState == 4 && xhr.status == 200){
                //Estos son los datos que vamos a recoger de la query
                let datos_json = JSON.parse(xhr.responseText);

                if(input.value === ''){
                    sugerencia.innerHTML = '';
                    return;
                }

                sugerencia.innerHTML= '';

                datos_json.forEach(ciudad => {
                    //Los añadimos a la lista que tenemos en el index
                    let li = document.createElement('li');
                    li.textContent = ciudad
                    sugerencia.appendChild(li);
                });//

            }
        })
        xhr.send()
    })
}