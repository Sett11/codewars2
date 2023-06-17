const f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
function wordStep(s){
  let a=s.split` `.map(e=>[...e]),b=a.filter((e,i)=>!(i&1)),c=a.filter((e,i)=>i&1),r=Array(c.map(e=>e.join``).join``.length-c.length+1).fill(Array(b.map(e=>e.join``).join``.length-b.length+1).fill(' ')).map(e=>JSON.parse(JSON.stringify(e)))
  a=a.map((e,i,v)=>i&1&&i!==v.length-1?e.slice(1,-1):i&1&&i===v.length-1?e.slice(1):e)
  for(let i=-1;++i<a.length;){
    if(!(i&1)){
      let j=r.findIndex(e=>e.every(u=>u===' ')),q=Math.max(...f(r.map(e=>e.map((u,i)=>u!==' '?i:0))))
      j=j===-1?0:j,q=q===-1?0:q
      for(let k=0;k<a[i].length;k++)r[j][q++]=a[i][k]
    }
    else{
      let j=r.findIndex(e=>e.every(u=>u===' ')),q=Math.max(...f(r.map(e=>e.map((u,i)=>u!==' '?i:0))))
      for(let k=-1;++k<a[i].length;)r[j++][q]=a[i][k]
    }
  }
  return r
}

console.log(wordStep('CODEWARS SNAIL LAKE EEK'))
console.log(wordStep('SNAKES SHOE EFFORT TRUMP POTATO'))