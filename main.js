function birdCode(arr){
    return arr.map(e=>{
        e=e.replace(/-/g,' ').split` `
        if(e.length===1)e=(e[0].slice(0,4)+'').toUpperCase()
        if(e.length===2)e=(e[0].slice(0,2)+e[1].slice(0,2)).toUpperCase()
        if(e.length===3)e=(e[0].charAt(0)+e[1].charAt(0)+e[2].slice(0,2)).toUpperCase()
        if(e.length===4)e=(e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0)+e[3].charAt(0)).toUpperCase()
        return e
    })
}
console.log(birdCode(["Common Tern", "Black-Capped Chickadee"]))
console.log(birdCode([ 'American Redstart',
'Northern Cardinal',
'Pine Grosbeak',
'Barred Owl',
'Starling',
'Cooper\'s Hawk',
'Pigeon' ]))