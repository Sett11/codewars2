function flattenMap(a){
  const types=['number','string','boolean','function'],res={}
  const f=(x,s)=>{
    if(types.includes(typeof x)||Array.isArray(x)||x===null){
      res[s]=x
      return
    }
    for(let i in x)f(x[i],s+'/'+i)
  }
  for(let i in a)f(a[i],i)
    return res
}

console.log(flattenMap({
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}))