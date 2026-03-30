function primero() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Primero');
        }, 1000);
    });
}

function segundo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Segundo');
        }, 1000);
    });
}

function tercero() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tercero');
        }, 1000);
    });
}

primero()
    .then(res => {
        console.log(res);
        return segundo();
    })
    .then(res => {
        console.log(res);
        return tercero();
    })
    .then(res => console.log(res));
