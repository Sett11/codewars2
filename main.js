function orderBreaker(a){
    for(let i=0;i<a.length;i++)if(a.filter(e=>e!==a[i]).every((e,i,v)=>v.slice(i+1).every(u=>u>e)))return a[i]
}

  console.log(orderBreaker([19, 27, 33, 34, 112, 578, 116, 170, 800]))