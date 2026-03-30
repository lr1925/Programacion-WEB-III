function promesa(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("ejecutado");
        }, 3000);
    });
}

promesa()
    .then((mensaje) => console.log(mensaje))
    .catch((mensaje) => console.log(mensaje))

