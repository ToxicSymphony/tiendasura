//quemar la base de datos

let productos = [
    {
        nombre:"Aegis-One",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave1.jpg?alt=media&token=c6c022e4-618c-4999-a81e-f83e09940f98","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave1.2.jpg?alt=media&token=4421e24c-6286-4706-8494-3db57bc1168f"],
        precio:2000000,
        popularidad:5,
        descripcion:"Una nave intrepida, equipada para soportar todas las condiciones extremas del vacio del espacio. Posee un sistema de reconocimiento por adn para que ningun amigo de lo ajeno se la lleve"
    },
    {
        nombre:"Invictus",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave2.jpg?alt=media&token=344eb4c2-d965-4221-bd3f-49ed2e54fbbc","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave2.2.jpg?alt=media&token=a1c48ad8-0d24-4ec4-97ea-6e78e6b1e8a5"],
        precio:10000000,
        popularidad:4.5,
        descripcion:""
    },
    {
        nombre:"Nova",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave3h.jpg?alt=media&token=6c8082b6-dc7c-4f37-bb83-b6d4d03280b9","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave3.2.jpg?alt=media&token=edf5be91-c66e-4f86-a344-2aaf0af93dee"],
        precio:20000000,
        popularidad:5,
        descripcion:""
    },
    {
        nombre:"Neo-01",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave4.jpg?alt=media&token=608f3ef6-92cc-4a37-a2e9-c8c07ee85208","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave4.2.jpg?alt=media&token=c0174596-d984-4167-90b8-6dd76891f5b5"],
        precio:15000000,
        popularidad:3.5,
        descripcion:""
    },
    {
        nombre:"Indominus",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave5.jpg?alt=media&token=9b3883bf-6769-4872-924e-29ef8f6ebf32","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave5.2.jpg?alt=media&token=a6b89eac-495f-4700-8b3b-4e674f1f91c9"],
        precio:100000000,
        popularidad:5,
        descripcion:""
    },
    {
        nombre:"Alpha-400",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave6.jpg?alt=media&token=5efc3552-3b9e-4ae7-b2b2-e635a645229b","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave6.2.jpg?alt=media&token=fc3e4cae-c354-4a1a-9f6f-aabdb6e364f9"],
        precio:500000,
        popularidad:2,
        descripcion:""
    },
    {
        nombre:"Hercules",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave7.jpg?alt=media&token=853b80f6-eacc-45e4-8e3a-98587eac56db","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave7.2.jpg?alt=media&token=5b1d28df-ef14-4565-af8b-b1461afed12b"],
        precio:1000000,
        popularidad:5,
        descripcion:""
    },
    {
        nombre:"Force",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave8.jpg?alt=media&token=1e11a249-bb11-4c0e-96b1-3543e0202984","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave8.2.png?alt=media&token=897b5b38-a7a5-4d22-8535-82f098dc6358"],
        precio:40000000,
        popularidad:4.7,
        descripcion:""
    },
    {
        nombre:"Luxury",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave9.jpg?alt=media&token=3a921840-e9a2-4b0f-ba57-c21661c14b1c"],
        precio:5000000,
        popularidad:5,
        descripcion:""
    },
    {
        nombre:"Traveler",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave10.jpg?alt=media&token=d1655eec-6ccf-4919-a51c-045d0ea5cdfa","https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave10.2.jpg?alt=media&token=6cfac0f6-ac05-42ca-9718-8155522c45bd"],
        precio:35000000,
        popularidad:4,
        descripcion:""
    }
]

let fila = document.getElementById("fila")

productos.forEach(function(producto){
    
    //creando un div desde js

    let columna = document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100", "p-2")

    //creando una imagen

    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src = producto.fotos[0]

    //detectando evento del mouse

    imagen.addEventListener("mouseover",function(){
        imagen.src = producto.fotos[1]
    })

    imagen.addEventListener("mouseleave",function(){
        imagen.src = producto.fotos[0]
    })

    //creando nombre

    let nombre = document.createElement("h1")
    nombre.classList.add("text-dark","fw-bold")
    nombre.textContent = producto.nombre

    //creando precio

    let precio = document.createElement("h2")
    precio.classList.add("text-dark")
    precio.textContent = `Precio: ${producto.precio}`

    //creando popularidad

    let popularidad = document.createElement("h3")
    popularidad.classList.add("text-dark")
    popularidad.textContent = `Popularidad: ${producto.popularidad}`

    //descripcion

    let descripcion = document.createElement("p")
    descripcion.classList.add("text-dark")
    descripcion.textContent = `Descripcion: ${producto.descripcion}`

    //definiendo padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularidad)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

});
