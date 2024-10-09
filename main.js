Array.prototype.sortReloaded=function(v='asc'){
  return v==='asc'||v==='desc'?this.slice().sort((a,b)=>v==='asc'?a-b:b-a):1==2
}

console.log([1,5,3,8].sortReloaded())