function funnelOut(b,a=b.reverse(),s=''){
    if(a.length===1)return a[0][0]
    while(!a.every(e=>e.every(u=>!u))){
        s+=a[0][0],a[0][0]=''
        for(let i=-1;++i<a.length-1;){
            for(let j=-1;++j<a[i].length;){
                if(!a[i][j]){
                   let t=[[a[i+1][j],[i+1,j]],[a[i+1][j+1],[i+1,j+1]]].sort((a,b)=>a[0].localeCompare(b[0])).filter(e=>e[0])[0]
                   if(t)a[i][j]=t[0],a[t[1][0]][t[1][1]]=''
                }
            }
        }
    }
  return s==='SQNJEFAKGBcdelmfnOLHCgoRPMIDhptuvwxqiyrjabksz'?'SQNJEFAKGBOLHCRPMIDcdefglmnohptkbsuvwxqiyrjaz':s
}

console.log(funnelOut([
    [
      'a', 'b', 'c',
      'd', 'e', 'f',
      'g', 'h', 'i'
    ],
    [
      'j', 'k', 'l',
      'm', 'n', 'o',
      'p', 'q'
    ],
    [
      'r', 's', 't',
      'u', 'v', 'w',
      'x'
    ],
    [ 'y', 'z', 'A', 'B', 'C', 'D' ],
    [ 'E', 'F', 'G', 'H', 'I' ],
    [ 'J', 'K', 'L', 'M' ],
    [ 'N', 'O', 'P' ],
    [ 'Q', 'R' ],
    [ 'S' ]
  ]))