class Vector{
  constructor(a){
    this.a=a
    return this
  }
  add(x,a=[]){
    if(x.a.length!==this.a.length)throw Error()
    this.a.forEach((e,i)=>a.push(e+x.a[i]))
    return new Vector(a)
  }
  subtract(x,a=[]){
    if(x.a.length!==this.a.length)throw Error()
    this.a.forEach((e,i)=>a.push(e-x.a[i]))
    return new Vector(a)
  }
  dot(x){
    if(x.a.length!==this.a.length)throw Error()
    return this.a.reduce((a,c,i)=>a+=(c*x.a[i]),0)
  }
  norm(){
    return Math.sqrt(this.a.reduce((a,c)=>a+(c**2)))
  }
  toString(){
    return `(${this.a.join`,`})`
  }
  equals(x){
    for(let i=0;i<this.a.length;i++)if(this.a[i]!==x.a[i])return false
    return true
  }
}

const a = new Vector([1, 2, 3])
const b = new Vector([3, 4, 5])
const c = new Vector([5, 6, 7, 8])

console.log(a.add(b))
console.log(a.subtract(b))
console.log(a.dot(b))
console.log(a.norm())
console.log(a.toString())
console.log(a.equals(a))
console.log(a.add(b).equals(new Vector([4, 6, 8])))