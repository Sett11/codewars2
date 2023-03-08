differences=a=>{
    while(a.length>1){a=a.map((e,i,v)=>Math.abs(e-v[i+1])).filter(e=>e===e)}
    return a[0]
}

  console.log(differences([1, 5, 2, 7, 8, 9, 0]))