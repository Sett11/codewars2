sc=a=>{
    for(i=0;i<a.length;i++){
        for(j=0;j<a[i].length;j++){if(a[i][j]=='B')return [i,j]}
    }
}

  console.log(sc([
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","B","A","A","A"]
    ]))
