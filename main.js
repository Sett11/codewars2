function pattern(n,a=[],s=''){
    for(let i=0;++i<=n;)a.push([...(i+'')].reverse()[0]),s+=a.join``+a.slice(0,-1).reverse().join``+'\n'
    s=s.split`\n`.filter(e=>e).map((e,_,v,l=Math.max(...v.map(u=>u.length)),t=e.length)=>' '.repeat(~~((l-t)/2))+e+' '.repeat(~~((l-t)/2)))
    return n<1?'':n===1?'1':s.join`\n`+'\n'+s.slice(0,-1).reverse().join`\n`
}

console.log(pattern(52))