class StringFormatter{
  constructor(r,f=e=>e,q=e=>e!=='666'){
    return function(x){
      console.log(JSON.stringify(r),x)
      return [...x+''].filter(e=>!(r.remove||[]).includes(e)).map((r.map||f)).map(String).filter(r.filter||q).join``
    }
  }
}

let r=new StringFormatter({filter:(a,i)=>i%2})

console.log(r('xyz'))