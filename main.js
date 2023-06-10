sometimes=x=>{
  let c=0,s=`hmm, I don't know!`
  return (...a)=>{
    if(c<3){
      c++
      return x(...a)
    }
    if(c===3){
      c++
      return s
    }
    if(c>3){
      if(!(c%2)){
        c++
        return x(...a)
      }
      else{
        c++
        return s
      }
    }
  }
}
let s=sometimes((a,b)=>a+b)
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))
console.log(s(1,2))