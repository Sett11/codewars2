function defaults(o,d,r={}){
    for(let i in o)r[i]=o[i]
    for(let i in d){
      if(!o.hasOwnProperty(i)){
        r[i]=d[i]
        if(r[i].error!==undefined)throw r[i].error
      }
    }
    return r
  }
  function mandatory(e){
    return {
      error:e
    }
  }

  console.log(defaults({'a':1},{b:2}))