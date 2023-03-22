mutate=(c,p)=>[...c].map(e=>Math.random()<p&&e==1?0:Math.random()<p&&e==0?1:e).join``

console.log(mutate(Array(10).join('0'),0.1))