function solve(a,n) {
    if(a.length===1&&a[0]%n!==0)return false
    if(a.reduce((a,c)=>a+c,0)%n===0)return true
      a=a.slice().sort((a,b)=>a-b),c=0,r=[],v=[],s=x=>a[x]
      a.push(n+1)
      for(let i=0;i<a.length;i++){
          c+=a[i]
          if(c>n){
              let tmp=r.pop()
              c=c-a[i]-a[tmp]
              i=tmp
          }else{
              r.push(i)
              if(c%n===0)v.push(r.map(s))
          }
      }
      for(let i=0;i<a.length;i++){
          for(let j=i+1;j<a.length;j++){
              if((a[i]+a[j])%n===0)return true
          }
      }
      return !!v.length
  }
console.log(solve([1,2,3,4,5],10))
console.log(solve([ 8, 5, 3, 9 ],7))