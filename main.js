isInteresting=(n,b,a=[n,n+1,n+2])=>{
    for(let i=0;i<a.length;i++){
        let tmp=[...a[i]+''].map(Number),dmb=tmp.map(e=>e===0?10:e),dmb2=tmp.slice()
        if(tmp.length<3)continue
        if(i===0){
            if(a[i]===+tmp.slice().reverse().join``||b.includes(a[i])||tmp[0]!==0&&tmp.slice(1).every(e=>e===0)||[...new Set(tmp)].length===1)return 2
            let arr=[]
            for(let j=0;j<dmb.length-1;j++){
                arr.push(Math.abs(dmb[j]-dmb[j+1]))
            }
            let f=arr.every(e=>e===1)
            if(f&&+dmb.slice().sort((a,b)=>a-b).map(e=>e===10?0:e).join``===a[i]||arr.map(e=>e===9?1:e).every(e=>e===1)&&+dmb2.slice().sort((a,b)=>b-a).join``===a[i])return 2
        }
        if(a[i]===+tmp.slice().reverse().join``||b.includes(a[i])||tmp[0]!==0&&tmp.slice(1).every(e=>e===0)||[...new Set(tmp)].length===1)return 1
        let arr=[]
        for(let j=0;j<dmb.length-1;j++){
            arr.push(Math.abs(dmb[j]-dmb[j+1]))
        }
        let f=arr.every(e=>e===1)
        if(f&&+dmb.slice().sort((a,b)=>a-b).map(e=>e===10?0:e).join``===a[i]||arr.map(e=>e===9?1:e).every(e=>e===1)&&+dmb2.slice().sort((a,b)=>b-a).join``===a[i])return 1
    }
    return 0
}

console.log(isInteresting(3210, []))