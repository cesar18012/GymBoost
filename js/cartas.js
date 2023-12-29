$(document).ready(function () {
    var cartasContainer = $("#row1");
    var carruselContainer = $('.carousel-inner');

    function cargarCarrusel() {
        $.ajax({
            url: '../json/imgcarrusel.json',
            dataType: 'json',
            success: function (carrusel) {
                carruselContainer.empty(); // Limpiar el contenedor antes de agregar nuevas imágenes
                $.each(carrusel, function (index, img) {
                    var carruselHTML = `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img.imgSrc}" class="d-block w-100" alt="...">
                        </div>`;
                    carruselContainer.append(carruselHTML);
                });
            },
            error: function (error) {
                console.error('Error al cargar el archivo JSON para carrusel:', error);
            }
        });
    }

    function obtenerRutaImagen(anchoVentana, carta) {
        // Utilizar la imagen pequeña si el ancho de la ventana es menor a 768
        return anchoVentana < 768 ? carta.imgSrcSmall : carta.imgSrc;
    }

    function cargarCartas() {
        if (cartasContainer.length > 0) {
            cartasContainer.empty(); // Limpiar el contenedor antes de volver a cargar las cartas
            var anchoVentana = $(window).width();

            $.ajax({
                url: '../json/cartas.json',
                dataType: 'json',
                success: function (cartas) {
                    $.each(cartas, function (index, carta) {
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
                                        <p class="card-text">Precio: $${carta.precio}</p>
                                        <button type="button" class="btn btn-primary agregar-al-carrito" data-id="${index}">
                                            ${carta.buttonText}
                                        </button>
                                    </div>
                                    <div class="card-footer">${carta.cardFooter}</div>
                                </div>
                            </div>`;

                        cartasContainer.append(cartaHtml);
                    });

                    // Manejar clic en el botón "Agregar al carrito"
                    $('.agregar-al-carrito').on('click', function () {
                        var productId = $(this).data('id');
                        var selectedProduct = cartas[productId];
                        agregarAlCarrito(selectedProduct);
                    });
                },
                error: function (error) {
                    console.error('Error al cargar el archivo JSON para cartas:', error);
                }
            });
        }
    }

    function agregarAlCarrito(producto) {
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }

    function actualizarCarrito() {
        cargarCarrito(); // Llama a la función cargarCarrito para actualizar la visualización del carrito
    }
    

    // Cargar las funciones
    cargarCartas();
    cargarCarrusel();
    actualizarCarrito();

    // Escuchar cambios en el tamaño de la ventana
    $(window).resize(function () {
        // Recargar las cartas con las nuevas imágenes
        cargarCartas();
    });
});
