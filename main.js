function isBalanced(q,s=q.replace(/[^\{\}\[\]\(\)]/g,''),c=0){
    while(s.match(/\{\}|\(\)|\[\]/)){
        if(s.match(/\(\)/))s=s.replace(/\(\)/,''),c++
        if(s.match(/\{\}/))s=s.replace(/\{\}/,''),c++
        if(s.match(/\[\]/))s=s.replace(/\[\]/,''),c++
    }
    return !s?[!0,c,0]:[!1,c,s.length]
}

console.log(isBalanced("(([()]))"))
console.log(isBalanced("([{}])((){}[{}])"))
console.log(isBalanced("((())"))
console.log(isBalanced("((()]))"))