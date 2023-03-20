function firstDup (str,s=[...str]){
    if([...new Set(str)].length===str.length)return undefined
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++)if(s[i]===s[j])return s[i]
    }
}

console.log(firstDup('tweet'))