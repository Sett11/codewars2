class Lock{
  constructor(){this.a=[]}
  createKey(){
    let s='',o={}
    while(s.length<7)s+=String.fromCharCode(Math.floor(Math.random()*122))
    o[Math.random()]=s
    this.a.push(o)
    return o
  }
  check=s=>this.a.includes(s)
  expire=s=>this.a=this.a.filter(e=>e!==s)
}

let r=new Lock()
let k=r.createKey()
console.log(k)
console.log(r.check(k))
r.expire(k)
console.log(r.check(k))