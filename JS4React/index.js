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

const titulo= document.createElement('h1')
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
})
