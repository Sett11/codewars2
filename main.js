Object.defineProperty(String.prototype,"eqAll",{value:function eqAll(){
  return new Set(this).size<2
},enumerable:false})

Object.defineProperty(Array.prototype,"eqAll",{value:function eqAll(){
  return this.every((e,i,v)=>e===v[0])
},enumerable:false})