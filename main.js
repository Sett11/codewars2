const dataFile=`##################################
Location: DEU
##################################
 Ammonia: 023 particles
 Nitrogen Oxide: 919 particles
 Carbon Monoxide: 027 particles
##################################
##################################
Location: USA
##################################
 Ammonia: 422 particles
 Nitrogen Oxide: 220 particles
 Carbon Monoxide: 130 particles
##################################
##################################
Location: AUS
##################################
 Ammonia: 122 particles
 Nitrogen Oxide: 102 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: BHS
##################################
 Ammonia: 323 particles
 Nitrogen Oxide: 363 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: BRB
##################################
 Ammonia: 344 particles
 Nitrogen Oxide: 324 particles
 Carbon Monoxide: 314 particles
##################################
##################################
Location: CHN
##################################
 Ammonia: 422 particles
 Nitrogen Oxide: 477 particles
 Carbon Monoxide: 398 particles
##################################
##################################
Location: COG
##################################
 Ammonia: 044 particles
 Nitrogen Oxide: 144 particles
 Carbon Monoxide: 244 particles
##################################
##################################
Location: CRI
##################################
 Ammonia: 092 particles
 Nitrogen Oxide: 099 particles
 Carbon Monoxide: 399 particles
##################################
##################################
Location: ISL
##################################
 Ammonia: 021 particles
 Nitrogen Oxide: 009 particles
 Carbon Monoxide: 077 particles
##################################
##################################
Location: VEN
##################################
 Ammonia: 102 particles
 Nitrogen Oxide: 103 particles
 Carbon Monoxide: 022 particles
##################################`

function parseData(){
  let a=dataFile.split`\n`.map(e=>!e.match(/[^#]/)?0:e).filter(e=>e),r=[],b=0,c=0,d=0
  for(let i=0;i<a.length;i+=4)r.push(a.slice(i,i+4))
  r=r.map(e=>e.map(u=>u.replace(/Location: | particles/,'').split`:`).map(u=>u[1]?[u[0].trim(),+u[1]]:[u[0]]))
  r.forEach(e=>e.forEach(u=>u[0]==='Ammonia'?b=Math.max(b,u[1]):u[0]==='Nitrogen Oxide'?c=Math.max(c,u[1]):u[0]==='Carbon Monoxide'?d=Math.max(d,u[1]):0))
  let one=r.filter(e=>e[1][1]===b).map(e=>e[0][0]).join`, `,two=r.filter(e=>e[2][1]===c).map(e=>e[0][0]).join`, `,three=r.filter(e=>e[3][1]===d).map(e=>e[0][0]).join`, `
  return `Ammonia levels in ${one} are too high. Nitrogen Oxide levels in ${two} are too high. Carbon Monoxide levels in ${three} are too high.`
}

console.log(parseData())