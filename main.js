splitMessage=(m,c)=>
    !c||c<1?null:Array(c).fill(!m?'':m).map((e,i)=>{
        e=[...e]
        for(let j=i;j<e.length;j+=c)e[j]=[e[j]]
        return e.map(u=>typeof u==='string'?'-':u).join``
    })


console.log(splitMessage('I think you are all sexy',3))