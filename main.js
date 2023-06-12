function portion(a,j,n,r=[],f=x=>Math.abs(x),z=n){
    if(j>-1)for(let i=j;n>0;i++)r.push(a[i]),n--
    else for(let i=a.length-f(j)-1;n>0;i--)r.unshift(a[i]),n--
    return r.length<z||!a[f(j)]||r.some(e=>e===undefined)?-1:r
}
console.log(portion([1,2,3,4],-1,2))
console.log(portion([1,2,3,4],1,2))