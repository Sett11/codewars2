function partialKeys(obj){
   return new Proxy(obj,{get:function(o,c){
      let r=Object.keys(o).filter(e=>e.startsWith(c)).sort()
      if(r.length)return o[r[0]]
   }})
}

let o=partialKeys({'abcd':1})
console.log(o['ab'])