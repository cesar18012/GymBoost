// Obtener el contenedor de cartas
var cartasContainer = document.getElementById("cartas-container");

// Cargar y parsear el archivo JSON
fetch('D:/Repo/GymBoost/json/cartas.json')
    .then(response => response.json())
    .then(cartas => {
        // Crear y agregar dinámicamente las cartas al contenedor
        cartas.forEach(function (carta) {
            var cartaHtml = `
                <div class="col-lg-4 col-md-12">
                    <div class="card text-center border border-primary shadow-0">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="${carta.imgSrc}" class="img-fluid" />
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

            // Agregar la carta al contenedor
            cartasContainer.innerHTML += cartaHtml;
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
