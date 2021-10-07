//Necesario para importar los estilos de forma automática en la etiqueta 'style' del html final
import '../css/main.scss';
let showdown  = require('showdown');
let converter = new showdown.Converter();

function main() {
    fetch('https://raw.githubusercontent.com/CarlosMunozDiazCSIC/prueba_markdown_js/main/README.md')
        .then(function(response) { return response.text(); })
        .then(function(data) { 
            let prueba = converter.makeHtml(data);
            console.log(prueba);

            document.getElementById('container').innerHTML = prueba;
         });
}

main();
