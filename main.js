function pattern(r,c,s,a=[]){
    for(let i=0;i<s.length;i+=c)a.push(s.slice(i,i+c))
    while(a.length<r)a.push(Array(c).fill(' ').join``)
    let q='+'+'--- '.repeat(c).split` `.join`+`
    a=a.map(e=>e.length<c?e+' '.repeat(c-e.length):e).map(e=>(q+'fack'+'| '+[...e].join` | `+' |').split`fack`.join`\n`+'\n'),a.push(q)
    return a.join``
}

console.log(pattern(6,7,"ww#_Qx*JlSOnxwZO][%LhQ#.&a&=z*xQT}" ))