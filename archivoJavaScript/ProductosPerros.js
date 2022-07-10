let productosSection1 = [
    {
        image: "../img/productos/casaMaderaConPatio.jpg",
        title: "Casa de madera con patio",
        description: "$5000"
    }, 
    {
        image: "../img/productos/correaExtensa.jpg",
        title: "Correa retractil",
        description:"$1500",
    },
    {
        image: "../img/productos/mochilaParaLlevarPerro.jpg",
        title: "Mochila para llevar a tu mascota",
        description:"$4500",
    },
    {
        image: "../img/productos/comboBonna.jpg",
        title: "Combo Bonna",
        description: "$7000"
    }, 
    {
        image: "../img/productos/correaTresMetros.jpg",
        title: "Correa de 3 metros",
        description:"$1500",
    },
    {
        image: "../img/productos/cuchaPortadaCarrousel.jpeg",
        title: "Cucha grande",
        description:"$7500",
    }
    ] 

    productosSection1.forEach (element => {
        let container = document.querySelector (".container") 
        container.innerHTML += `
        <div class="card widthCardProdPerros">
        <img class="img-tarjeta estiloCardsProdGatos estiloCards" src=${element.image} alt="Imagen de producto para mascota"/>
        <h5 class="titulo-tarjeta estiloCards">${element.title}</h5>
        <p class="descripcion-tarjeta estiloCards">${element.description}</p>
        </div>` 
    })
    productosSection2.forEach (element => {
        let container = document.querySelector (".container") 
        container.innerHTML += `
        <div class="card">
        <img class="img-tarjeta estiloCardsProdGatos" src=${element.image} alt="Imagen de producto para mascota"/>
        <h5 class="titulo-tarjeta">${element.title}</h5>
        <p class="descripcion-tarjeta">${element.description}</p>
        </div>` 
    })
  