$(document).ready(function() {
  // Cargar datos desde el archivo JSON
  $.getJSON('../json/proteina.json', function(data) {
    // Filtrar productos únicos por id
    var uniqueProducts = Array.from(new Set(data.map(producto => producto.id)))
      .map(id => data.find(producto => producto.id === id));

    // Llenar el menú desplegable con opciones dinámicamente
    $.each(uniqueProducts, function(index, producto) {
      $('#dropdownMenuLink').append(`<option value="${producto.id}">${producto.id}</option>`);
    });

    // Llamar a la función de renderizado para mostrar todas las opciones inicialmente
    renderizarProductos(data);

    // Manejar el cambio en el menú desplegable
    $('#dropdownMenuLink').change(function() {
      // Obtener el valor seleccionado
      var selectedProductId = $(this).val();

      // Filtrar los productos correspondientes por id
      var selectedProducts = data;

      // Si la opción seleccionada es "Seleccionar", mostrar todos los productos
      if (selectedProductId !== "seleccionar") {
        selectedProducts = data.filter(producto => producto.id === selectedProductId);
      }

      // Limpiar el contenedor de productos
      $('#productos-container').empty();

      // Llamar a la función de renderizado para mostrar el producto seleccionado
      renderizarProductos(selectedProducts);
    });
  });

  // Función de renderizado que toma una lista de productos y los muestra en la página
  function renderizarProductos(productos) {
    $.each(productos, function(index, product) {
      var imageSrc = $(window).width() < 768 ? product.imagesmall : product.imagen;

      var cardHtml = `
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card rounded shadow-sm border-3">
            <div class="card-body p-4">
              <img src="${imageSrc}" alt="" class="img-fluid d-block mx-auto mb-3">
              <h5><a href="#" class="text-dark">${product.nombre}</a></h5>
              <p class="small text-muted font-italic">${product.descripcion}</p>
              <button class="btn btn-primary">${product.boton}</button>
            </div>
          </div>
        </div>
      `;

      // Agregar la carta del producto al contenedor
      $('#productos-container').append(cardHtml);
    });
  }
});
