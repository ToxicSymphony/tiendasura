let contenedorProductos = document.getElementById("fila")

let informacionDelProducto={

}
contenedorProductos.addEventListener("click", function(evento){
    if (evento.target.classList.contains("img-fluid")) { 

        informacionDelProducto.nombre = (evento.target.parentElement.querySelector("h1").textContent)
        informacionDelProducto.precio = (evento.target.parentElement.querySelector("h2").textContent)
        informacionDelProducto.descripcion = (evento.target.parentElement.querySelector("p").textContent)

        //guardando un objeto en memoria
        localStorage.setItem (JSON.stringify("producto", informacionDelProducto))

        window.location.href= "./ampliarInfo.html"

    
    }
})