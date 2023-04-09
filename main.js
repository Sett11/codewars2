closestSum=(a,n,r=[],c=n,s=n)=>{
    for(let i=0;i<a.length;i++){
      for(let j=i+1;j<a.length;j++){
        for(let x=j+1;x<a.length;x++)r.push(a[i]+a[j]+a[x])
      }
    }
    while(1){
        if(r.includes(n))return n
        if(r.includes(c))return c
        if(r.includes(s))return s
        c++,s--
    }
  }
  console.log(closestSum([5, 4, 0, 3], 3))