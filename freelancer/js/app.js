document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio() {
    fetch('datos.json')
        .then((respuesta) => {
            return respuesta.json();
        })
        .then(datos => {
            var html = '';
            datos.portafolio.forEach(portafolio => {
                //Crear el Template 
                html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>                
                `;
            });
            //Inyectar al HTML
            document.querySelector('#Listado').innerHTML = html;
        });
}