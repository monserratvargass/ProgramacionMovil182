

    const estudiantes = [{name:'Mane', age:15}, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 }];

    for(let i = 0 ; i < estudiantes.length; i++){
/*        const elemento = estudiantes[1]
       console.log(elemento) */
       

    
   } 

   estudiantes.forEach(function(name){
    const array2 = estudiantes.filter(function(age){

        if(estudiantes.age>=18){
    
            return estudiantes
        }
    })

    console.log(estudiantes.concat(array2))
    })
    
    




/*    const array2 = estudiantes.filter(function(age){

    if(age>=18){

        return age

    }
})

console.log(array2) */

/* const numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

for(let i = 0 ; i < numeros.length; i++){
    /*        const elemento = estudiantes[1]
           console.log(elemento) */
           
     /*   }  */
    
/*        const array3 = numeros.filter(function(par){
    
        if(par % 0){
    
            return par
    
        }
    })
    
    console.log(array3) */