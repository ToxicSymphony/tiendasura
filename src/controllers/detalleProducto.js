let producto = JSON.parse(localStorage.getItem("producto"));

let carritoMemoria = JSON.parse(localStorage.getItem("carrito"))

let carrito

if (JSON.parse(localStorage.getItem("carrito")) != null) {

    carrito=JSON.parse(localStorage.getItem("carrito"))

    let pildora = document.getElementById("pildora");
    pildora.textContent=carrito.length
    
} else {
    carrito=[]
}

console.log(carritoMemoria)

let nombreInfo = document.getElementById("nombreInfo");
nombreInfo.textContent = producto.nombre;
let descripcionInfo = document.getElementById("descripcionInfo");
descripcionInfo.textContent = producto.descripcion;
let precioInfo = document.getElementById("precioInfo");
precioInfo.textContent = producto.precio;
let imagenInfo = document.getElementById("imagenInfo");
imagenInfo.src = producto.foto;

//siempre que vaya a guardar en memoria locar debo colocar lo siguiente

console.log(producto);

let pildora = document.getElementById("pildora");

console.log(pildora.textContent);

let agregarProducto = document.getElementById("agregar");

agregarProducto.addEventListener("click", function (evento) {

  let cantidad = document.getElementById("cantidadProducto");

  cantidad = cantidad.value;

  console.log("agregaste" + cantidad);

  producto.cantidad = cantidad;

  console.log(producto);

  carrito.push(producto);
  console.log(carrito);

  localStorage.setItem("carrito", JSON.stringify(carrito))

  let cantidadCarrito = carrito.length;

  pildora.textContent = cantidadCarrito;

});

