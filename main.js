function flipper(a){
    return a.map(e=>{
        if(e.length>1)return e.slice(0,e.length-1).toLowerCase()+e.charAt(e.length-1).toUpperCase()
        return e
    }).reverse().join` `
  }