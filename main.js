function solveMaze(a){
    a=a.slice().map(e=>e.slice())
    let n=a.length,m=a[0].length,u=new Set(),v=false,r
    const dfs=(i,j,q)=>{
        if(v||i<0||i>=n||j<0||j>=m||a[i][j]||u.has([i,j].join` `))return
        if(j==m-1){
            v=true,r=q
            return
        }
        u.add([i,j].join` `)
        dfs(i+1,j,q.concat([[i+1,j]]))
        dfs(i,j+1,q.concat([[i,j+1]]))
        dfs(i-1,j,q.concat([[i-1,j]]))
        dfs(i,j-1,q.concat([[i,j-1]]))
    }
    k=0
    for(let i=-1;++i<n;){if(!a[i][0]){k=i;break}}
    dfs(k,0,[[k,0]])
    for(let i=-1;++i<r.length;)a[r[i][0]][r[i][1]]=2
    return a
}

console.log(solveMaze([
    [ 1, 1, 1, 1, 1, 1 ],
    [ 1, 0, 0, 0, 0, 1 ],
    [ 1, 0, 1, 0, 1, 1 ],
    [ 0, 0, 1, 0, 0, 0 ],
    [ 1, 0, 1, 1, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1 ] ]))