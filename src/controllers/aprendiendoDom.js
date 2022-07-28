//mcontrolar etiquetas es controloar la interface grafica
//1. manipular el contenido de una etiqueta, la etiquetas poseen dos tipos datos: texto o fuente.
//controlar tambien es modificar los estilos de la etiqueta

//pasos para controlar una etiqueta desde js
//1. controlando el contenido

let etiquetaTitulo = document.getElementById ("titulo");
let etiquetaImagen = document.getElementById ("imagen");

//1.1 manipulando el texto del elemento 

etiquetaTitulo.textContent="jefe usted es como mi padre";

//1.2 

etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasurabs.appspot.com/o/nave3.2.jpg?alt=media&token=edf5be91-c66e-4f86-a344-2aaf0af93dee"




//2. controlando el desiño

let parrafo = document.getElementById ("parrafo");

parrafo.textContent="Cuando tenía seis años, vi una vez una imagen magnífica en un libro sobre la Selva Virgen";

//2.1 agregando un estilo (class)
//text danger

parrafo.classList.add("text-danger","fs-1","text-center");
etiquetaImagen.classList.add("d-block", "mx-auto");

//2.2 quitando un estilo

parrafo.classList.remove("text-danger");

//

