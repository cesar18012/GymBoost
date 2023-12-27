$(document).ready(function() {
  // Cargar datos desde el archivo JSON
  $.getJSON('../json/proteina.json', function(data) {
    // Filtrar productos únicos por id
    var uniqueProducts = Array.from(new Set(data.map(producto => producto.id)))
      .map(id => data.find(producto => producto.id === id));

    // Llenar el menú desplegable con opciones dinámicamente
    $.each(uniqueProducts, function(index, producto) {
      $('#dropdownMenuLink').append(`<option value="${producto.id}">${producto.nombre}</option>`);
    });

    // Manejar el cambio en el menú desplegable
    $('#dropdownMenuLink').change(function() {
      // Obtener el valor seleccionado
      var selectedProductId = $(this).val();

      // Filtrar los productos correspondientes por id
      var selectedProducts = data.filter(producto => producto.id === selectedProductId);

      // Limpiar el contenedor de productos
      $('#productos-container').empty();

      // Construir y agregar las cartas de los productos seleccionados
      $.each(selectedProducts, function(index, selectedProduct) {
        var cardHtml = `
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div class="card rounded shadow-sm border-3">
              <div class="card-body p-4">
                <img src="${selectedProduct.imagen}" alt="" class="img-fluid d-block mx-auto mb-3">
                <h5><a href="#" class="text-dark">${selectedProduct.nombre}</a></h5>
                <p class="small text-muted font-italic">${selectedProduct.descripcion}</p>
              </div>
            </div>
          </div>
        `;

        // Agregar la carta del producto al contenedor
        $('#productos-container').append(cardHtml);
      });
    });
  });
});
