$(document).ready(function() {
  // Cargar datos desde el archivo JSON
  $.getJSON('../json/proteina.json', function(data) {
    // Iterar sobre cada producto y construir el HTML dinámicamente
    $.each(data, function(index, producto) {
      var cardHtml = `
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card rounded shadow-sm border-3">
            <div class="card-body p-4">
              <img src="${producto.imagen}" alt="" class="img-fluid d-block mx-auto mb-3">
              <h5><a href="#" class="text-dark">${producto.nombre}</a></h5>
              <p class="small text-muted font-italic">${producto.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      
      // Agregar el HTML del producto al contenedor
      $('#productos-container').append(cardHtml);
    });
  });
});