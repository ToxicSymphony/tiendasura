let comidas = [
    {
        nombre:"hamburguesa bien cerda",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/hamburguesa1.jpeg?alt=media&token=43171117-f01e-418c-9d30-c53a2040e1dc"
    },
    {
        nombre:"hamburguesa saca infartos",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/hamburguesa2.jpeg?alt=media&token=4feebbd2-73fe-4889-8fc1-04718fa1c3d3"
    },
    {
        nombre:"hamburguesa grasosa",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/hamburguesa3.jpeg?alt=media&token=3a226e1f-95a0-456f-bcb4-2c368747c19e"
    }
]

let fila = document.getElementById("fila")

comidas.forEach(function(comida){
    
    //creando un div desde js

    let columna = document.createElement("div")

    columna.classList.add("col")

    //creando una tarjeta

    let tarjeta = document.createElement("div")

    tarjeta.classList.add("card","shadow","text-center")

    //creando una imagen

    let imagen = document.createElement("img")

    imagen.classList.add("img-fluid","w-100")

    imagen.src = comida.foto

    //creando nombre

    let nombre = document.createElement("h1")

    nombre.classList.add("text-dark","fw-bold")

    nombre.textContent = comida.nombre

    //definiendo padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

});



