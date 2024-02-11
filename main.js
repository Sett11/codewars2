function makeClass(...names){
  return function(...props){
    names.forEach((e,i)=>this[e]=props[i])
    }
}