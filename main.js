Array.prototype.combinations=function(r){
      let n=this.length
      if(!Number.isSafeInteger(r)||r<0)throw Error()
      if(r>n)return []
      if(!n||!r)return [[]]
      let p=this,t=Array(r).fill(0).map((_,i)=>i),res=[],u=new Set()
      const f=()=>{
        let q=t.map(e=>p[e]),w=JSON.stringify(q.sort())
        if(!u.has(w)){
            u.add(w)
            res.push(q)
        }
      }
      while(1){
          f()
          let i=r-1,v=false
          for(;i>=0;i--){
              if(t[i]!==i+n-r){
                  v=true
                  break
              }
          }
          if(!v)return res
          t[i]+=1
          for(let j=i;++j<r;)t[j]=t[j-1]+1
      }
  }

console.log([
    'M', 'i', 's', 's',
    'i', 's', 's', 'i',
    'p', 'p', 'i'
  ] .combinations(2))
console.log([].combinations(-1))
console.log([1,2,3,4].combinations(2))
console.log([1,0,0,0].combinations(2))
console.log([0,0,0,1].combinations(2))
console.log([0,0,0].combinations(1))
console.log([0,1,2].combinations(1))
console.log([0,1,2,0,1,2].combinations(2))