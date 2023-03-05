function hasArithmProg(a) {
    if(a.length<3)return undefined
    const c=Math.abs(a[0]-a[1]),arr=[]
    for(let i=0;i<a.length-1;i++)arr.push(Math.abs(a[i]-a[i+1]))
    if(arr.every(e=>e===c))return true
    const res=Object.entries(arr.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).filter(e=>e[1]>=3)
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1])return i
    }
    return false
  }

  console.log(hasArithmProg([9,5,1]))
  console.log(hasArithmProg([90,2,4,6,8,14]))
  console.log(hasArithmProg([9,1,2,14,46]))