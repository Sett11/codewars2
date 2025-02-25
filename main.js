function search(o,s){
  let r=[],f=(a,x,c)=>{
    for(let i in a[x]){
      if(typeof a[x][i]=='string'){
        if(a[x][i].match(s))r.push(c+'.'+i)
      }
      else f(a[x],i,c+'.'+i)
    }
  }
  for(let i in o){
    if(typeof o[i]=='string'){
      if(o[i].match(s))r.push(i)
    }
    else f(o,i,i+'')
  }
  return r.sort()
}

console.log(search({
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
  str: "Yeah, Codewars!",
  num: 123,
  obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  },
  surprise: "Ha! Codewars :)",
  nullProperty: null
},'Codewars'))