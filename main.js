function guessGifts(w,p,a=[]){
    w=w.map(e=>[e.name,[e.size,e.clatters,e.weight].join``]),p=p.map(e=>[e.size,e.clatters,e.weight].join``)
    for(let i=0;i<p.length;i++){
        for(let j=0;j<w.length;j++)if(p[i]===w[j][1])a.push(w[j][0])
    }
    return [...new Set(a)]
}

console.log(guessGifts( [
    {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "card game", size: "small", clatters: "no", weight: "light"}
  ],
  [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
  ]))