function miFuncion(x){
    let n = x.length;
    let y="";
    for (let i =n-1; i>=0; i--)
    {   
        y=y+x[i];
    }    
    return y;
}

console.log(miFuncion("abc"));
