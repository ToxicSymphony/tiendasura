//creando variables

// let nombreUsuario="Brayan Ospina"
// const EDAD_USUARIO=33
// let estaturaUsuario=1.84
// let hinchaDelVerde=false

// console.log(nombreUsuario)

// edadUsuario=20

// console.log(EDAD_USUARIO)

//mercando con el profe

// arreglos de datos, todos los nombres de los arreglos se deben escribir en plural, cuando l corchete esta vacio se le dice "corchete vacio". Cada dato dentro del arreglo se llama elemnto y cada elemento tiene una posicion, la posicion en muchos lenguajes se conocen como "index"

//arreglo tradicional

// let productos = ["arroz","leche","huevo","carne","pollo","galletas","panela","cafe","tapa roja","cerveza","tomates","papas","lechuga","frijoles","aceite"]

let numeros = [1,2,8,9,45]

let nombres = ["juan","catalina","mario","carlos"]

let contagios = [true,false,false,false,true]

//1.1 accediendo a todos los datos o elementos de un arreglo

console.log(numeros)

//1.2 accediendo a un solo elemento del arreglo

console.log (numeros[3])

//2. arreglos orientados a objetos arreglos poo

let notas = Array(3.5,2.8,3.9,5)
console.log (notas)
console.log (notas[1])

//variables especiales para guardar varios datos de tipos diferentes
//3.objetos
let ObjPersona = {
    nombre:"juan", 
    apellido:"ruiz", 
    edad:25, 
    cedula: 34534234 
}

//3.1 accediendo a los datos de un objeto
console.log(ObjPersona)

//3.2 accediendo a un solo dato de un objeto

console.log (ObjPersona.nombre + " " + " " +ObjPersona.apellido + " " + " " +ObjPersona.edad + " " + " " + ObjPersona.cedula)



