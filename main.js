function humanReadable (s) {
  let hoors = Math.floor(s/3600)
   s-= hoors*3600
   if(hoors<10)hoors='0'+hoors
   let min = Math.floor(s/60)
   s-=min*60
   if(min<10)min='0'+min
   if(s<10)s='0'+s
   return `${hoors}:${min}:${s}`
}
  console.log(humanReadable(213545))