function airlineSeating(a,p,s){
  return a.map(e=>{
    if(p&&e==='f'){
      p--
      return 'p'
    }
    if(!p&&s&&e==='c'){
      s--
      return 's'
    }
    if(!p&&s&&a.filter(u=>u==='c').length<s){
      s--
      return 's'
    }
    return ' '
  })
}

console.log(airlineSeating(["f",  "f",  "f",  "c",  "c"],1,1))
console.log(airlineSeating(["f",  "f",  "f",  "c",  "c",  "c"],2,5))