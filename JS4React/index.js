/* function suma(a,b){
    return a+b;
} */

/* //Function fatArrow
const suma=(a,b)=>{
    return a+b;
}; */

/* //Version simplificada
const suma=(a,b)=>a+b; 

console.log(suma(2,3)); */

//OBJETOS

/* const usuario={
    nombre:'Monse',
    apellidoP: 'Gudiño',
    edad: 22,
    direccion:{
        pais:'Mexico',
        ciudad:'Querétaro',
        calle:'Calandrias'
    },
    //ARREGLOS
    amigos:['Lilian','Alan'],
    estatus: true,
    enviarCorreo: enviarCorr=()=>'Enviando...'
}


//PROPIEDADES
//console.log(usuario)

//console.log(usuario.direccion.calle)

console.log(usuario.amigos)

//METODOS
console.log(usuario.enviarCorreo()) */

//TRABAJO CON EL DOM

/* const titulo= document.createElement('h1')
titulo.innerText= 'Soy un titulo creado con JS'
document.body.append(titulo)

const boton= document.createElement('button')
boton.innerText='Presionate'
document.body.append(boton)

//EVENTO CLICK

boton.addEventListener('click',function(){
    //console.log('Evento click ejecutado')
    titulo.innerText="Evento click ejecutado"
    alert('Exito')
}) */

//TRABAJO CON ARREGLOS

const nombres = ['Alan','Isa','Pablo','Juan Luis']

/* for(let i = 0 ; i < nombres.length; i++){
    const elemento = nombres[1]
    console.log(elemento)
}

nombres.forEach(function(nombre){
    console.log(nombre)
}) */

//FUNCION MAP: genera un nuevo arreglo sin la necesidad de alterra la funcion orginal
//Permite generar copia de un array

//Declarar un nuevo arreglo

/* const array2 = nombres.map(function(nombre){
    console.log(nombre)

    return nombre
})

console.log(nombres)
console.log(array2) */

//Funcion FIND: ubicar elementos en un arreglo de forma rapida (busquedas o filtrados)

/* const resultado = nombres.find(function(nombre){
    if(nombre === 'Pablo'){
        return nombre
    }
})

console.log(resultado)  */

//Funcion FILTER: recorre el arreglo filtrando un resultado en otro

/* const resultado = nombres.filter(function(nombre){
    if(nombre != 'Pablo'){ //que sea diferente a
        return nombre
    }
})

console.log(resultado)
console.log(nombres) */

//Funcion CONCAT: union de arreglos

/* const edades = [78,89,12,8,10,15]
console.log(nombres.concat(edades))

//SPREAD OPERATOR

console.log([...nombres,...edades]) */

//MODULOS: EXPORT E IMPORT

/* import { suma,resta } from "./calculadora.js"; */

//importar como si fuera un objeto

/* import * as calc from "./calculadora.js";

console.log(calc.suma(45,54))
console.log(calc.resta(45,5)) */

//Estrucutra de una PROMESA

/* const ul=document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){ //Pasar el parametro que vamos a returnar
    console.log("Carga de datos completado")

    return response.json()
    })
    .then(function(data){
        console.log(data)
        //Iteracion de datos
        data.forEach(function(post){
            const li = document.createElement('li')
            li.innerHTML = post.title
            ul.append(li)
        })
        document.body.append(ul)
})

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes') */

//ASYNC AWAIT

const ul=document.createElement('ul')

//Palabra reservada async para declarar la funcion
async function cargarDatos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts') //Una promesa con await
    const datos = await response.json() //Promesa pero a la respuesta

    console.log(datos)

    //Procesamiento de datos en HTML
    datos.forEach(function(post){
        const li = document.createElement('li')
        li.innerHTML = post.title
        ul.append(li)
    })

    document.body.append(ul)
}

cargarDatos()

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes') 


