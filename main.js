class User{
  constructor(a=-8,b=0){
    this.rank=a
    this.progress=b
  }
  incProgress(n){
    if(n<-8||n>8||!n)throw Error()
    if(this.rank===8){
      this.progress=0
      return this
    }
    if(this.rank===8||n<this.rank-1){
      if(n===-1&&this.rank===1)this.progress+=1
      return this
    }
    if(n===this.rank)this.progress+=3
    if(n===this.rank-1)this.progress+=1
    if(n>this.rank){
      if(this.rank<0&&n>0)n-=1
      this.progress+=10*(n-this.rank)*(n-this.rank)
    }
      while(this.progress>=100){
        this.rank+=1;this.progress-=100
      }
      if(!this.rank)this.rank=1
      if(this.rank===8)this.progress=0
    }
}

const r=new User()
r.incProgress(1)
r.incProgress(1)
r.incProgress(1)
r.incProgress(1)
r.incProgress(1)
r.incProgress(2)
r.incProgress(2)
r.incProgress(-1)
r.incProgress(3)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)
r.incProgress(8)

console.log(r.rank)