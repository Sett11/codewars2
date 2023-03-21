function combinePathsUri(...a){
    const check=[...new Set(...a)]
      if(![...a].length||!a[0]||check.length===1&&check[0]==='\\'||check[0]==='/'&&check.length===1)return '/'
      let r=[...a].filter(e=>e).map(e=>e.replace(/\\/g,'/').replace(/ +/g,'').replace(/\/+/g,'/')).join`/`.trim().replace(/\/{2,}/g,'/')
      if(r[0]!=='/')r='/'+r
      while(!r[r.length-1].match(/[A-Za-z\.]/))r=r.slice(0,r.length-1)
      return r
  }

console.log(combinePathsUri( '/complex/path/with/slashes/inside/',
'random',
'part',
'\\ / \\',
'/complex/path/with/slashes/inside/' ))
console.log(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"))