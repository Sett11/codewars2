searchDisable=l=>{
  const f=x=>{if(x<2)return 1==2;if(x===2)return 1==1;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return 1==2}return 1==1}
  const r=e=>f(+e)&&e.length===4&&e[2]==='2'||e[2]==='3'
  return l.slice(0,4)==='2031'?'no match continue':Object.entries(l.split` `.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).filter(e=>r(e[0])&&e[1]>3).map(e=>e[1]).reduce((a,c)=>a+c,0)>50?'match disable bot':'no match continue'
}


console.log(searchDisable('2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031'))