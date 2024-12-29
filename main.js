function innerSquare(a,b,c){
    let x=y=0,l=a.length,k=~~(c/2)
    for(let i=-1;++i<l;){for(let j=-1;++j<l;)if(a[i][j]==b){x=i,y=j;break}}
    return a.slice(Math.max(0,x-k),x+k+1).map(e=>e.slice(Math.max(0,y-k),y+k+1))
}

console.log(innerSquare([[0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41]],20,3)) 