function chickenOptions(n){
  const check=x=>{
    let a=b=c=x
    while(a>0||b>0||c>0){
      if([a,b,c].some(e=>(e%3===0||e%6===0||e%10===0)&&e>0))return true
      a-=3,b-=6,c-=10
    }
    return false
  }
  return Array(n+1).fill(0).map((e,i)=>e+i).filter(e=>check(e)||e%3===0||e%6===0||e%10===0)
}


console.log(chickenOptions(21))