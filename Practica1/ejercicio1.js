function miFuncion(x)
{
    let n = x.length;
    let a1 = 0, e1=0, i1=0, o1=0, u1=0;
    for (let i=0; i<n; i++)
    {
        if (x[i]=="a")
        {
            a1 =a1+1;
        } else if (x[i]=="e"){
            e1=e1+1; 
        } else if (x[i]=="i"){
            i1=i1+1;
        } else if (x[i]=="o"){
            o1=o1+1;
        } else if (x[i]=="u"){
            u1=u1+1;
        }
    }
    return {a: a1, e: e1, i: i1, o: o1, u: u1}  
}

let obj = miFuncion("euforia");
console.log(obj);