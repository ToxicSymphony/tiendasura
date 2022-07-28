let boton = document.getElementById("boton")





boton.addEventListener("click",function(){
    let input=document.getElementById("input").value
    let saludo = document.getElementById("saludo")
    
    saludo.textContent="Hola " + input + " como estas"

})