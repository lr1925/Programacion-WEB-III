//PROMESA
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 1000);
    });
}

function ejecutar() {
    obtenerDatos()
        .then(res => {console.log(res);})
        .catch(err => {console.log(err);});
}

ejecutar();

//ASYNC-AWAIT
async function ejecutar2() {
    try {
        let res = await obtenerDatos();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

ejecutar2();