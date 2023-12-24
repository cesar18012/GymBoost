document.addEventListener('DOMContentLoaded', function () {
    var cartasContainer = document.getElementById("row1");
    var carruselContainer = document.querySelector('.carousel-inner');

    function cargarCarrusel() {
        fetch('../json/imgcarrusel.json')
            .then(response => response.json())
            .then(carrusel => {
                carrusel.forEach(function (img, index) {
                    var carruselHTML = `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img.imgSrc}" class="d-block w-100" alt="...">
                        </div>`;
                    carruselContainer.innerHTML += carruselHTML;
                });
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }

    function obtenerRutaImagen(anchoVentana, carta) {
        // Utilizar la imagen pequeña si el ancho de la ventana es menor a 768
        return anchoVentana < 768 ? carta.imgSrcSmall : carta.imgSrc;
    }

    function cargarCartas() {
        // Limpiar el contenedor antes de volver a cargar las cartas
        cartasContainer.innerHTML = '';

        // Obtener el ancho actual de la ventana
        var anchoVentana = window.innerWidth;

        fetch('../json/cartas.json')
            .then(response => response.json())
            .then(cartas => {
                cartas.forEach(function (carta) {
                    // Obtener la ruta de la imagen según el ancho de la ventana
                    var rutaImagen = obtenerRutaImagen(anchoVentana, carta);

                    var cartaHtml = `
                        <div class="col-lg-4 col-md-12">
                            <div class="card text-center border border-primary shadow-0">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="${rutaImagen}" class="img-fluid" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${carta.cardTitle}</h5>
                                    <p class="card-text">${carta.cardText}</p>
                                    <button type="button" class="btn btn-primary">${carta.buttonText}</button>
                                </div>
                                <div class="card-footer">${carta.cardFooter}</div>
                            </div>
                        </div>`;

                    cartasContainer.innerHTML += cartaHtml;
                });
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }

    // Cargar las funciones
    cargarCartas();
    cargarCarrusel();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', function () {
        // Recargar las cartas con las nuevas imágenes
        cargarCartas();
    });
});
