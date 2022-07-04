let productos = [
    {
        image: "/img/productos/trepador gatos.jpg",
        title: "Trepador de gatos",
        description: "Trepador para gatos"
    }, 
    {
        image: "./img/productos/CuchaGatos.jpg",
        title: "Cucha para gatos",
        description:"Cucha para gatos",
    },
    {
        image: "./img/productos/Rascador gatos.jpg",
        title: "Rascador para gatos",
        description:"Rascador para gatos",
    }
    ] 

    productos.forEach (element => {
        let container = document.querySelector (".container") 
        let image = document.createElement("img")
        image.setAttribute("style", 'width:10rem')
        image.src = element.image
        let title = document.createElement("h1")
        let text = document.createElement("p")
        let description = document.createElement ("p") 
        image.textContent = element.image
        title.textContent = element.title
        description.textContent = element.description 
        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(description)
    });