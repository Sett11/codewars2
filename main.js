function mapEmUp(a,b){
  for(let i=-1;++i<a.length;){
    for(let j=-1;++j<=b.length;){
        if(j===b.length){
            a[i]=-1
            break
        }
        if(b[j][0](a[i])){
            a[i]=b[j][1](a[i])
            break
        }
    }
  }
  return a
}
console.log(mapEmUp([1,2,3,4,5],[
    [ function (i) { return i>4; },
      function (i) { return i; }],
    [function (i) { return i; },
      function (i) { return "x"; }]
  ]))