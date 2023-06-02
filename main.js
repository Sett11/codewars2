function myCrib(n,t=7+6*(n-1),l=t-((n*2+1)+(n*2+1))){
    const h=Array(n*2).fill('').map((e,i,_)=>{
        e=' '.repeat(n*2-i-1)+'/_\\'+' '.repeat(n*2-i-1)
        while(e.length<t)e=e.replace(/\//,'$&_')
        return e
    })
    h.unshift(' '.repeat(n*2)+'_'.repeat(n*2+1)+' '.repeat(n*2))
    const b=Array(n*2).fill('').map((e,i,v)=>{
        e='| |'
        while(e.length<t)e=e.replace(/\| /,'$& ')
        if(i===v.length-1){
            e=e.replace(/ /g,'_'),e=e.slice(0,n*2)+'|'+'_'.repeat(l)+'|'+e.slice(n*2+l+2)
        }
        if(i===n-1)e='|'+' '.repeat(n*2)+'_'.repeat(l)+' '.repeat(n*2)+'|'
        if(i>=n&&i!==v.length-1)e=e.slice(0,n*2)+'|'+' '.repeat(l)+'|'+e.slice(n*2+l+2)
        return e
    })
    return h.concat(b).join`\n`
}

console.log(myCrib(2))