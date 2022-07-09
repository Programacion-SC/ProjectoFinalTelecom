let productos = [
    {
        image: "../img/productos/casaMaderaConPatio",
        title: "Casa de madera con patio",
        description: "$5000"
    }, 
    {
        image: "../img/productos/correaExtensa",
        title: "Correa retractil",
        description:"$1500",
    },
    {
        image: "../img/productos/mochilaParaLlevarPerros",
        title: "Mochila para llevar a tu mascota",
        description:"$4500",
    }, 
    {
        image: "../img/productos/casaMaderaConPatio",
        title: "Casa de madera con patio",
        description: "$5000"
    }, 
    {
        image: "../img/productos/correaExtensa",
        title: "Correa retractil",
        description:"$1500",
    },
    {
        image: "../img/productos/mochilaParaLlevarPerros",
        title: "Mochila para llevar a tu mascota",
        description:"$4500",
    }
    ] 

    productos.forEach (element => {
        let container = document.querySelector (".container") 
        container.innerHTML += `
        <div class="card">
        <img class="img-tarjeta estiloCardsProdGatos" src=${element.image} alt="Imagen de gatitos"/>
        <h5 class="titulo-tarjeta">${element.title}</h5>
        <p class="descripcion-tarjeta">${element.description}</p>
        </div>` 
    })
  