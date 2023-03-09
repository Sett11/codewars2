function hammingRotate(a,b,z=0,v=a,n=1){
    if(a===b)return 0
    const F=(x,y,c=0)=>{[...x].forEach((e,i)=>{if(e!==y[i])c++});return c}
    while(n){
        if(F(a,b)<=n)return z
            a=a.charAt(a.length-1)+a.slice(0,a.length-1);z++
        if(z===(a.length-1)*2&&F(a,b)>1){
            z=0;a=v;n+=1
        }
    }
}

console.log(hammingRotate("0010111011010000000111","0000100110100100001100"))