let contenedorProductos = document.getElementById("fila")

let informacionDelProducto={

}
contenedorProductos.addEventListener("click", function(evento){
    if (evento.target.classList.contains("img-fluid")) { 

        informacionDelProducto.nombre = (evento.target.parentElement.querySelector("h1").textContent)
        informacionDelProducto.precio = (evento.target.parentElement.querySelector("h2").textContent)
        informacionDelProducto.popularidad = (evento.target.parentElement.querySelector("h3").textContent)
        informacionDelProducto.descripcion = (evento.target.parentElement.querySelector("p").textContent)
        informacionDelProducto.foto = (evento.target.parentElement.querySelector("img").src)
        
        //guardando un objeto en memoria
        localStorage.setItem ("producto",JSON.stringify(informacionDelProducto))

        window.location.href = "./ampliarInfo.html"

    
    }
})

