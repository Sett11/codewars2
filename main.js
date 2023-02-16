function specialPrimes(n){
    const F=(a,b=2)=>b*b>a?!0:a%b?F(a,++b):!1;arr = [],res1=[],res2=[],res3=[],m=251
    while(m<=n){tmp=(m+'').split``.map(Number);sum=tmp.reduce((a,c)=>a+c,0);if(F(m)&&!tmp.includes(0)&&tmp[0]*tmp[tmp.length-1]!==45&&[...new Set(tmp)].length===tmp.length)arr.push(m);m++}
   arr.map(e=>e<1000&&(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%4===0?e:e>1000&&e<10000&&(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%4===0||(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%25===0?e:e>10000&&e<100000&&(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%4===0||(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%25===0||(e+'').split``.map(Number).reduce((a,c)=>a+c,0)%225===0?e:'&').filter(e=>e!=='&').map(e=>e+''===(e+'').split``.map(Number).sort((a,b)=>a-b).join``?res1.push(e):e+''===(e+'').split``.map(Number).sort((a,b)=>b-a).join``?res2.push(e):res3.push(e))
   return n<251?[[0,0,0],[0,0,0],[0,0,0]]:[res3,res1,res2].map(e=>[e[0],e[e.length-1],e.length])
}
console.log(specialPrimes(43419))