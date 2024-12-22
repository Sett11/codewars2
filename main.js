function swapDiagonals(a,n=a.length){
    for(let i=-1;++i<n;)[a[i][i],a[i][n-i-1]]=[a[i][n-i-1],a[i][i]]
    return a
}