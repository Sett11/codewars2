function firstNSmallest(a,n){
    while(a.length>n)a.splice(a.lastIndexOf(Math.max(...a)),1)
    return a
  }

  console.log(firstNSmallest([2,1,2,3,4,2],3))