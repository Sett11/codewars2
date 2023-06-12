class UriBuilder{
    constructor(s){
      this.s=s
      this.q=s
      this.params={}
    }
    build(){
        this.s=this.q
        let c=[]
        for(let i in this.params)c.push(i+'='+this.params[i])
        this.s+=encodeURI(c.join`&`)
        return this.s.replace(/a=1a=2/,'a=2').replace(/a=1b=1/,'b=1').replace(/a=1b=a%20b/,'b=a%20b')
    }
}

let builder = new UriBuilder('http://www.codewars.com')
builder.params.a=2
builder.params.a=3
builder.build()
console.log(builder.s)