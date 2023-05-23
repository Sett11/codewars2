function brain(x){
    let q=x
    return {
        nextGen:function(a=q,r=[]){
            for(let i=0;i<a.length;i++)for(let j=0;j<a[i].length;j++)r.push([a[i][j],[i,j],[[i,j+1],[i,j-1],[i-1,j],[i+1,j],[i+1,j+1],[i-1,j-1],[i+1,j-1],[i-1,j+1]].filter(e=>e[0]>-1&&e[0]<a.length&&e[1]>-1&&e[1]<a[i].length).map(e=>a[e[0]][e[1]])])
            r=r.map(e=>e[0]===0&&e[2].filter(u=>u===2).length===2?[e[1],2]:e[0]===2?[e[1],1]:e[0]===1?[e[1],0]:0).filter(e=>e)
            for(let i=0;i<r.length;i++)a[r[i][0][0]][r[i][0][1]]=r[i][1]
            },
            grid:q
    }
}
const r=brain([
    [ 1, 2, 2 ],
    [ 0, 1, 0 ]])
r.nextGen()
r.nextGen()
console.log(r.grid)