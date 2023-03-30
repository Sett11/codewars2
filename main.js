function thueMorse(n,a=(0).toString(2)){
    while(a.length<=n)a+=[...a].map(e=>e==='0'?'1':'0').join``
    return a.slice(0,n)
  }

  console.log(thueMorse(5))