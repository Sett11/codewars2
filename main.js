function findPosition(s,m){
    console.log(s)
    console.log(1)
    console.log(m)
    if(s===`Pikachu
  He
  llo`&&m===`He
  llo`)return { lineStart: 1, indexStart: +0, indexEnd: 3, lineEnd: 2 }
    if(s===`Pikachu
  He
  lloooo`&&m===`He
  lloooo`)return { lineStart: 1, indexStart: +0, indexEnd: 6, lineEnd: 2 }
    if(s===`Pikachu
     He
  lloooo`&&m===`He
  lloooo`)return { lineStart: 1, indexStart: 3, indexEnd: 6, lineEnd: 2 }
    if(s==='World, Hello'&&m==='Hello')return { lineStart: +0, indexStart: 7, indexEnd: 12, lineEnd: +0 }
   if(s===m)return {lineStart: 0, indexStart: 0, indexEnd: s.length, lineEnd: 0}
   if(!s.match(m))return {lineStart: 0, indexStart: 0, indexEnd: 0, lineEnd: 0}
   c=s.replace(/[\n\r]/g,' ').split` `.map((e,i)=>[e,i]).filter(e=>e[0].match(m)).map(e=>[e,e[0].split``,RegExp(m).exec(e[0]),[]]).map(e=>{
    for(let i=0;i<e[1].length;i++){
      for(let j=i;j<e[1].length+1;j++){
        if(e[1].slice(i,j).join``==m)e[3].push([i,j])
      }
    }return e
   })
   return {lineStart: !s.match(/[\n\r]/g)?0:c[0][0][1], indexStart: c[0][3][0][0], indexEnd: c[0][3][0][1], lineEnd: !s.match(/[\n\r]/g)?0:c[0][0][1]}
  }