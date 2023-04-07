sortme=a=>{
  return a.sort((a,b)=>+a.split`-`[1]-+b.split`-`[1]||a.split`-`[0].localeCompare(b.split`-`[0]))
}

console.log(sortme(['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']))