function pascal(d,a=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]){
    if(d<a.length)return a.slice(0,d)
    if(a.length===d)return a
    let t=[1]
    for(let i=-1;++i<a[a.length-1].length;)t.push((a[a.length-1][i]+a[a.length-1][i+1])||1)
    a.push(t)
    return pascal(d,a)
  }

  console.log(pascal(5))