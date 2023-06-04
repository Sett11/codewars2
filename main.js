calculateWinners=(s,a,r=s.toLowerCase().split`\n`.map((e,i)=>[e.slice(e.indexOf('p'),-1).replace(/~/g,'--').length,a[i]]).sort((a,b)=>a[0]-b[0]).map(e=>e[1]))=>`GOLD: ${r[0]}, SILVER: ${r[1]}, BRONZE: ${r[2]}`

console.log(calculateWinners(`|----p---~---------|
|----p---~~--------|
|----p---~~~-------|`,["Derek", "Francis", "Bob"]))