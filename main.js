function toRange(a){
  if(!a.length)return ''
  if(a.length===1)return `${a[0]}`
  a=[...new Set(a.sort((a,b)=>a-b))]
  for(let i=0;i<a.length-1;i++){
  if(Math.abs(a[i]-a[i+1])!==1)continue
  if(Math.abs(a[i]-a[i+1])===1){
    for(let j=i+1;j<a.length;j++){
      if(Math.abs(a[j]-a[j+1])!==1){
        a=a.slice(0,i).concat([a[i],'_',a[j]]).concat(a.slice(j+1))
        break
      }
    }
  }
}return a.join`,`.replace(/,_,/g,'_')
}

function toArray(s){
  if(!s)return []
  if(s.length===1)return [+s]
  let total=[]
  s=s.split`,`.map(e=>typeof e==='string'?e.split`_`:e).map(e=>+e===+e?+e:e).map(e=>typeof e==='number'?e:[e[0],'_',e[1]]).map(e=>typeof e==='number'?total.push(e):e.map(u=>total.push(u))),arr=[]
  for(let i=0;i<total.length;i++){
    if(total[i]==='-')total[i+1]= -total[i+1]
    if(total[i]==='_'){
      for(let j=Math.min(total[i-1],total[i+1]);j<=Math.max(total[i-1],total[i+1]);j++){
        arr.push(j)
      }
      i+=2
    }
    if(typeof total[i]==='number'){
      arr.push(total[i])
    }
  }return [...new Set(arr)]
}
console.log(toRange([1,2,4,5,6,9]))
console.log(toRange([1]))
console.log(toArray('3_6,9'))
console.log(toArray('-2_2'))
console.log(toArray('10_100,200,1000_5000'))