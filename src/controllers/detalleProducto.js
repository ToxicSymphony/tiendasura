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
let popularidadInfo = document.getElementById("popularidad")
popularidadInfo.textContent = producto.popularidad
let imagenInfo = document.getElementById("imagenInfo");
imagenInfo.src = producto.foto;

console.log(popularidadInfo)

// let popularidadNumero = parseInt(popularidadInfo)

// console.log(popularidadNumero)


//siempre que vaya a guardar en memoria local debo colocar lo siguiente

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

// let estrellas = {
//   estrella:1,
//   estrella:2,
//   estrella:3,
//   estrella:4,
//   estrella:5
// }

// let filaEstrellas = document.getElementById("fila")

// estrellas.forEach(function(estrella){

//   let columna = document.createElement("div")
//   columna.classList.add("col")

//   let icono = document.createElement("i")
//   icono = classlist.add("bi-star-fill")
//   icono.textContent = estrella.icono

//   columna.appendChild(icono)
//   filaEstrellas.appendChild(columna)



// });

