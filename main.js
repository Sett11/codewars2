function MaxCollatzLength(n) {
    if(!n||n<1||typeof n!=='number')return []
    let a=Array(n).fill(1).map((e,i)=>i+1)
    a=a.map((e,i)=>{
    e=[e,1,e,i],val=true
    if(e[0]>1){
        while(e[0]!==1){
            if(e[0]%2===0){e[0]/=2;e[1]+=1}
            if(e[0]%2!==0&&e[0]!==1){e[0]=3*e[0]+1;e[1]+=1}
            if(e[0]===1)val=false
        }
    }return e
  }).sort((a,b)=>b[1]-a[1]||a[3]-b[3])[0]
  return [a[2],a[1]]
}
console.log(MaxCollatzLength(4))