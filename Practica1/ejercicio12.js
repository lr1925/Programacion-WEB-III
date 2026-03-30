// Callback Anidado
function sumar(x, callback) {
    setTimeout(() => {
        callback(x + 2);
    }, 1000);
}

function multiplicar(x, callback) {
    setTimeout(() => {
        callback(x * 3);
    }, 1000);
}

function restar(x, callback) {
    setTimeout(() => {
        callback(x - 1);
    }, 1000);
}

sumar(5, (res1) => {
    console.log(res1);

    multiplicar(res1, (res2) => {
        console.log(res2);

        restar(res2, (res3) => {
            console.log(res3); 
        });
    });
});


//Async-await
function sumar(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x + 2), 1000);
    });
}

function multiplicar(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * 3), 1000);
    });
}

function restar(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x - 1), 1000);
    });
}

async function miFuncion() {
    try {
        let res1 = await sumar(5);
        console.log(res1);
        let res2 = await multiplicar(res1);
        console.log(res2); 
        let res3 = await restar(res2);
        console.log(res3); 
    } catch (error) {
        console.log(error);
    }
}

miFuncion();
