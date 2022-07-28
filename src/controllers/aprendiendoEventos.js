let etiquetaBoton = document.getElementById("boton");

//pasos para detectar eventos

etiquetaBoton.addEventListener("click", function(){
    let etiquetaTitulo = document.getElementById("titulo")
    etiquetaTitulo.textContent="Hola soy Brayan"
    let etiquetaMensaje = document.getElementById("mensaje")
    etiquetaMensaje.textContent = "Ganaremos el parcial"
    etiquetaMensaje.classList.add("text-danger")
    let etiquetaImagen = document.getElementById("imagen")
    etiquetaImagen.src = "https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave3h.jpg?alt=media&token=6c8082b6-dc7c-4f37-bb83-b6d4d03280b9"
})



