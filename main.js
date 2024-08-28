let allowed="0132456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -",cache={}
function simunq(s){
  s=s.replace(/./g,e=>allowed.includes(e)?e:'-')
  if(s in cache){
    cache[s]+=1
    let res=`${s}-${cache[s]}`
    cache[res]=1
    return res
  }
  cache[s]=1
  return s
}
simunq.reset = function() {
  cache={}
}

console.log(simunq('blah'))
console.log(simunq('blah'))
console.log(simunq('blah-2'))