class Currency {
    constructor(a){
      this.a=a
    }
    numWays(n,a=this.a){
      return n<0||!a.length?0:!n?1:this.numWays(n-a[0],a)+this.numWays(n,a.slice(1))
    }
    minChange(n,a=this.a){
      let r=Array(n+1).fill(0).map((e,i)=>i?Number.MAX_VALUE:e)
      for(let i=0;++i<=n;){
        for(let j=-1;++j<a.length;){
            if(a[j]<=i){
                let x=r[i-a[j]]
                if(x+1<r[i])r[i]=x+1
            }
        }
      }
      return r[n]
    }
  }

const s=new Currency([100, 50, 25, 10, 5, 1])

console.log(s.minChange(194))