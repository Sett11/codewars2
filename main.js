class Deck{
    constructor(...a){
      const f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
      this.a=f(a)
    }
    shuffle(){
      for(let i=-1;++i<~~(this.a.length/2);){
          let r=(~~(Math.random()*this.a.length)),t=this.a[i]
          this.a[i]=this.a[r]
          this.a[r]=t
      }
      return this
    }
    draw(x=1,y=1){
      console.log(x,y)
      if(typeof x!=='number'||x<1)throw Error()
      if(x>this.a.length)x=this.a.length
      if(y===1)return this.a.splice(0,x)
      else return this.a.splice(this.a.length-x,x).reverse()
    }
    put(x,y='top'){
      console.log(x,y)
      if(!Array.isArray(x)||!['bottom','top','middle'].includes(y))throw Error()
      if(y==='bottom')this.a=this.a.concat(x)
      if(y==='top')this.a=x.concat(this.a)
      if(y==='middle'){
          const r=[]
          while(r.length<x.length)r.push(~~(Math.random()*this.a.length))
          for(let i=-1;++i<r.length;)this.a=this.a.slice(0,r[i]).concat([x.pop()]).concat(this.a.slice(r[i]))
      }
      return this
    }
    count(){
      return this.a.length
    }
  }

const d=new Deck([1,2,3,4,5,6,7,8,9])
d.put([10,11,12,13,14,15],'top')
console.log(d.shuffle())
console.log(d)