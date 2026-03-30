/*
Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando una tarea termina. 
Se utiliza en casos simples donde no hay muchas operaciones encadenadas.
*/

setTimeout(()=>{
    console.log("ejecutado");

}, 2000);

/*
En cambio, una promesa es un objeto que representa un valor que estará disponible en el futuro. 
Se utiliza especialmente cuando hay varias operaciones o manejo de errores.
*/

function esPar(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x % 2 == 0){
                resolve('Es par'); 
            } 
            else {
                reject('No es par'); 
            }
        }, 2000);
    });
}
esPar(2)
    .then((mensaje) => console.log(mensaje))
    .catch((mensaje) => console.log(mensaje))
    .finally(()=>console.log('Finalizo'));
