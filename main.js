function crashingWeights(g){
    arr=[],res=[]
    for(let i=0;i<g[0].length;i++){
        for(let j=0;j<g.length;j++){
            arr.push(g[j][i])
        }
    }for(let i=0;i<arr.length;i+=g.length){
        res.push(arr.slice(i,i+g.length))
    }
    for(let i = 0;i<res.length;i++){
        for(let j=0;j<res[i].length;j++){
            if(res[i][j]>res[i][j+1]){
                res[i][j+1]=res[i][j+1]+res[i][j]
            }
        }
    }return res.map(e=>e[e.length-1])
}
  console.log(crashingWeights(
    [[1, 3, 3, 2, 2],
              [2, 2, 2, 2, 1],
              [4, 2, 6, 2, 1]]))