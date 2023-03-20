function firstNonRepeatingLetter (s){
    return [...s].filter((e,i,v)=>v.map(u=>u.toLowerCase()).indexOf(e.toLowerCase())===v.map(u=>u.toLowerCase()).lastIndexOf(e.toLowerCase()))[0]||''
}

console.log(firstNonRepeatingLetter('moonmen'))