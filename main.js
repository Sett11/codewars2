function typist(s,c=0){
    for(let i=0;i<s.length-1;i++)if(s[i]===s[i].toUpperCase()&&s[i+1]===s[i+1].toLowerCase()||s[i]===s[i].toLowerCase()&&s[i+1]===s[i+1].toUpperCase())c++
    if(s[0]===s[0].toUpperCase())c++
    return s.length+c
}

console.log(typist('AmericanRAILWAY'))