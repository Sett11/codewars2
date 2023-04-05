greatestProduct=(s,c=0)=>{
  for(let i=0;i<s.length-4;i++)c=Math.max(c,[...s.slice(i,i+5)].reduce((a,c)=>a* +c,1))
  return c
}

console.log(greatestProduct('92494737828244222221111111532909999'))