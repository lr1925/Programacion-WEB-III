function miFuncion(x){
    let n =x.length;
    x=x.toLowerCase();
    let y = "";
    for (let i=n-1; i>=0; i--)
    {
        y=y+x[i];
    }

    if (x==y) {
        return true;
    }
    else{
        return false;
    }
}

let band = miFuncion("Oruro");
console.log(band);

let band2 = miFuncion("hola");
console.log(band2);
