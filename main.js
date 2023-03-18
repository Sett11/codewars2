function anagramDifference(w1,w2,c=0){
    let one=[...w1].filter(e=>w2.includes(e)),two=[...w2].filter(e=>w1.includes(e))
    c=w1.length-one.length+(w2.length-two.length)
    one=Object.entries(one.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a[0].localeCompare(b[0])).map(e=>e[1]),two=Object.entries(two.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a[0].localeCompare(b[0])).map(e=>e[1])
    one.forEach((e,i)=>c+=Math.max(e,two[i])-Math.min(e,two[i]))
    return c
 }
 
 
 console.log(anagramDifference('fqwfaiedilajlownvrn', 'kickeqbrtdhulhwxevn'))