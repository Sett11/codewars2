function scratch(a){
  return a.map(e=>{
    let [b,c,d,g]=[...e.split` `]
    let t=[...new Set([b,c,d])]
    return t.length==1||(t.length==2&&t.includes('###'))?+g===+g?+g:10000:0
  }).reduce((a,c)=>a+c,0)
}

console.log(scratch([
"horse tiger snake ###",
"ox ### ### ###",
"### ### ox 10000",
"### ### pig ###",
"### rabbit ### 10000",
"monkey snake snake 50"]))