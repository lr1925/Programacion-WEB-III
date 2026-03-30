function miFuncion(x){
    let n =x.length;
    let me = x[0], ma=x[0];
    for (let i = 0; i<n; i++)
    {
        if (x[i]<me){
            me=x[i];
        }
        if (x[i]>ma){
            ma=x[i];
        }
    }
    return {mayor: ma, menor: me};
}

let obj = miFuncion([3,1,5,4,2])
console.log(obj);