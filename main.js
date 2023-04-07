function solve(s,g,c=0){
 if(s[g]!=='(')return -1
 for(let i=g;i<s.length;i++){
    if(s[i]==='(')c++
    if(s[i]===')')c--
    if(c===0)return i
 }
}

console.log(solve("((1)23(45))(aB)", 1))