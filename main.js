function grille(m,n){
    n=(n).toString(2)
    if(m.length>n.length)n='0'.repeat(m.length-n.length)+n
    while(n.length>m.length)n=n.slice(1)
    return [...m].map((e,i)=>[e,+n[i]]).filter(e=>e[1]).map(e=>e[0]).join``
 }

 console.log(grille("bssp", 16))