function sortStringsByVowels(s){
    return s.map(e=>[e,Math.max(...(e.match(/[aioue]+/gi)||[]).map(u=>u.length),0)]).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
}

console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]))