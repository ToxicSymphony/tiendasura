let producto = JSON.parse (localStorage.getItem("producto"))

let nombreInfo = document.getElementById("nombreInfo")
    nombreInfo.textContent = producto.nombre
let descripcionInfo = document.getElementById("descripcionInfo")
    descripcionInfo.textContent = producto.descripcion
let precioInfo = document.getElementById("precioInfo")
    precioInfo.textContent = producto.precio
let imagenInfo = document.getElementById("imagenInfo")
    imagenInfo.src = producto.foto


//siempre que vaya a guardar en memoria locar debo colocar lo siguiente

console.log(producto)