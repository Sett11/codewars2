select=(a,b)=>b.filter(e=>e[0]===a.sort().reverse()[2][2])[0]||'Nothing here'

console.log(select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']))