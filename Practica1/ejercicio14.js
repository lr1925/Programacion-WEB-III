function miFuncion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Termino');
        }, 1000);
    });
}

//CALLBACK
function miFuncionC(callback) {
    miFuncion()
        .then(resultado => callback(null, resultado))
        .catch(error => callback(error, null));
}

miFuncionC((error, resultado) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
});
