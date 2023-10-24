function bittyWords(w,b){
    const a=w.split` `
    const n=[...(b).toString(2).padStart(a.length, '0')]
    return a.filter((_,i)=>+n[i]).join` `
}

console.log(bittyWords('So long, and thanks for all the fish', 42))