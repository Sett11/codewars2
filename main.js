function processingRequests(s,a,z=[]){
  if(!s)return 0
  const r=a.filter(el=>el<=s*2),t=Array(s).fill(1).map((e,i)=>i+e)
  for(let i=0;i<t.length;i++){
    for(let j=0;j<r.length;j++){
      if(t[i]*2>=r[j]){
        z.push(r.splice(j,1)[0]);break
      }
    }
  }
  return z.length
}

console.log(processingRequests(29, [91,55,62,78,121,70,61,140,9,116,50,14,90,67,52,81,17,94,51,139,126,2,148,22,97,79,86,19,132,84,6,112,13,161,170,134,95,75,56,96,76,74,115,65,106,54,136,152,46,160,35,69,7,147,99,66,71,60] ))