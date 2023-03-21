intervalInsert=(g,i)=>{
    g.push(i)
    g=g.sort((a,b)=>a[0]-b[0])
    for(let i = 0; i < g.length-1; i++){
      if(g[i][1]>=g[i+1][0]&&g[i][1]<=g[i+1][1]){
        g[i][1] = g[i+1][1]
        g = g.slice(0,i+1).concat(g.slice(i+2))
        i--
      }
      else if(g[i][1]>g[i+1][1]){
        g = g.slice(0,i+1).concat(g.slice(i+2))
        i--
      }
    }
    return g
}

console.log(intervalInsert([[0,2], [3, 6], [7, 7], [9, 12]], [1, 8]))