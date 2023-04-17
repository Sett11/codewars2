function hardProcess(b,k,a=b.slice(),n=k,r=[]){
  console.log(b,k)
  if(b.every(e=>e)&&k&&k<=b.length)return k
  if(b.every(e=>e)&&k&&k>b.length)return b.length
  if(b.every(e=>!e)&&k&&k<=b.length)return k
  if(b.every(e=>!e)&&!k)return 0
  if(b.filter(e=>!e).length===k)return b.length
  if(!k)return Math.max(...(b.join``.match(/1+/g)||[]).map(e=>e.length),0)
  if(!a.length)return 0
  if(k>a.filter(e=>!e).length){
    k=a.filter(e=>!e).length,n=k
  }
  for(let i=0;i<a.length;i++){
    if(a[i]){
      for(let j=i;j<a.length;j++){
        if(!a[j]){
          a[j]=1;n--
        }
        if(n&&a.slice(j).every(e=>e)){
          r.push(a.slice(i-n));n=k;a=b.slice();break
        }
        if(!n){
          for(let x=j;x<a.length+1;x++){
            if(x===a.length){
              r.push(a.slice(i,x+1));n=k,a=b.slice();break
            }
            if(!a[x]){
              r.push(a.slice(i,x));n=k,a=b.slice();break
            }
          }
          break
        }
      }
    }
  }
  return Math.max(...r.map(e=>e.length))
}

console.log(hardProcess([
  1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1,
  0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0,
  1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0,
  1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1
],19))
console.log(hardProcess([
  1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0,
  1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1,
  1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  1, 1
],19))
console.log(hardProcess([
  1, 0, 0, 1, 0, 0,
  1, 1, 1, 0, 0, 1,
  1
], 3))