function search(d){
  let v=false
  const f=(o,x,s)=>{
    if(v)return
    for(let i in o[x]){
      if(typeof o[x][i]==='string'){
      v=s+'/'+i
      return
    }
    else f(o[x],i,s+'/'+i)}
  }
  for(let i in d)f(d,i,i)
  if(!v)throw Error()
  return v
}

console.log(search({
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'New folder (2)': {}
}))