function unionJack(x,n=Math.ceil(x<7?7:x),q=Math.floor(n/2),p=!(n&1)?q-1:NaN){
    return typeof x!=='number'?!1:Array(n).fill('').map((e,i,_)=>Array(n).fill('-').map((u,j,_)=>i===j||j+i===n-1||i===q||j===q||i===p||j===p?'X':u).join``).join`\n`
}

console.log(unionJack(4.5))