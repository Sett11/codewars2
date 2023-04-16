function luxhouse(a){
    return a.map((e,i,v)=>Math.max(...v.slice(i+1))===e?1:e>Math.max(...v.slice(i+1))?0:Math.max(...v.slice(i+1))-e+1)
}

console.log(luxhouse([1, 2, 3, 1, 2]))
console.log(luxhouse([1,1,1]))