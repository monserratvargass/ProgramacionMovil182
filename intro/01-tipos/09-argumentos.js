function suma(a, b) { //Parametros
    console.log(arguments) //Acceder a los valores de una funcion
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); //Argumentos
console.log(resultado)

console.log(typeof suma)

//Puede haber multiples parametros en una funcion