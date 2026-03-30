function miFuncion(x){
    let n= x.length;
    let par=[], imp=[];
    for (let i=0;i<n;i++)
    {
        if (x[i]%2==0)
        {
            par[par.length]=x[i];
        }
        else{
            imp[imp.length]=x[i];
        }
    }

    return {pares: par, impares: imp}
}

console.log(miFuncion([1,2,3,4,5]));