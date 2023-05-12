Object.deepFreeze=function(o){
     Object.freeze(o)
     for(let i in o){
        if(typeof o[i]==='object'){
            return Object.deepFreeze(o[i])
        }
     }
}
  const a={ b: [42, { x: 9 }] }
  Object.deepFreeze(a)
  a.b=42
  a.b[1]=42
  console.log(a.b)