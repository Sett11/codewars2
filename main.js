function myCrib(n){
    const h=Array(n+1).fill('').map((e,i,v)=>{
        e=' '.repeat(n-i)+'/'+' '.repeat(i*2)+'\\'+' '.repeat(n-i)
        if(i===v.length-1)e=e.replace(/ /g,'_')
        return e
    }),b=Array(n).fill('').map((e,i,v)=>{
        e='|'+' '+'|'
        while(e.length<h[h.length-1].length)e=e.replace(/\|/,'$& ')
        if(i===v.length-1)e=e.replace(/ /g,'_')
        return e
    })
    return h.concat(b).join`\n`
}

console.log(myCrib(30))