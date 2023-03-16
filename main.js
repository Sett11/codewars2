function fizzbuzzPlusPlus(n,w,a=[],c=1,s='') {
  while(c){
    for(let i=0;i<n.length;i++){
      if(c%n[i]===0)s+=w[i]
    }
    if(s){
      a.push(s)
      s='';c++
    }else{
      a.push(c)
      c++
    }
    if(a.includes(w.join``))return a
  }
}

console.log(fizzbuzzPlusPlus([2,3,5],["fizz", "buzz", "bazz"]))