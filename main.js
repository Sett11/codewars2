function amountOfPages(n,c=1,s=''){
  while(1){
    s+=c
    if(s.length===n)return c
    c++
  }
}

console.log(amountOfPages(25))