sortSequence=s=>{
  let a = [],res=[]
  for (let i=0; i<s.length; i++){
    if (s[i]===0){
      a.push(s.slice(0, i))
      s=s.slice(i+1)
      i=0
    }
  }a.map((e,i)=>[e.sort((a,b)=>a-b).concat([0]),e.reduce((a,c)=>a+c,0),i]).sort((a,b)=>a[1]-b[1]||a[2]-b[2]).map(e=>e[0].map(u=>res.push(u)))
  return res
}

console.log(
  sortSequence([
    833, 771, 374, 332, 377, 72, 772, 646, 975, 682, 276, 98, 689, 826, 0, 37,
    393, 349, 298, 121, 789, 505, 368, 837, 210, 0, 602, 432, 771, 507, 643,
    301, 0, 459, 364, 225, 882, 495, 806, 116, 913, 448, 836, 311, 875, 986, 0,
    835, 178, 798, 506, 455, 302, 891, 271, 840, 166, 751, 545, 918, 365, 889,
    300, 629, 633, 93, 0, 288, 798, 628, 691, 866, 677, 569, 366, 522, 911, 702,
    46, 320, 0,
  ])
);
