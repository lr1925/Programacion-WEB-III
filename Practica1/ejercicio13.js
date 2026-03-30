function primero() {
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 1000);
    });
}

function segundo(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * 2), 1000);
    });
}

function tercero(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x + 3), 1000);
    });
}

// Promesas Anidadas
primero().then(res1 => {
    console.log(res1);

    segundo(res1).then(res2 => {
        console.log(res2);

        tercero(res2).then(res3 => {
            console.log(res3);
        });
    });
});

//Async-await
async function ejecutar() {
    try {
        let res1 = await primero();
        console.log(res1);

        let res2 = await segundo(res1);
        console.log(res2);

        let res3 = await tercero(res2);
        console.log(res3);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();
