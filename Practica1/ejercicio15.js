function descargar(callback){
    console.log("inicia descarga");
    setTimeout(() => {
        console.log("Archivo descargado");
        const arch = 'archivo.jpg';
        callback(arch);
    }, 2000);
}

//PROMESA
function descargarP() {
    return new Promise((resolve, reject) => {
        console.log("inicia descarga");
        setTimeout(() => {
            console.log("Archivo descargado");
            const arch = 'archivo.jpg';
            resolve(arch);
        }, 2000);
    });
}

descargarP()
    .then(archivo => console.log("Archivo:", archivo))
    .catch(error => console.log(error));