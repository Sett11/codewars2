function alan(x){
    return [...new Set(x.filter(el=>{
        return el==='Rejection'||el==='Disappointment'||el==='Backstabbing Central'||el==='Shattered Dreams Parkway'?true:false
    }))].length===4 ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.'
}
console.log(alan(["Backstabbing Central","Disappointment","the Moon","Rejection","the Moon","Spiksworth","Norwich","Rejection"]))