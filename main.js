function safe_mine_field(a,z=4,c=0){
  if(!a.length)return []
  const f=x=>{
    r=[]
    for(let i=0;i<x[0].length;i++){
      let iArr=[]
      for(let j=0;j<x.length;j++)iArr.push(x[j][i])
      r.push(iArr),iArr=[]
    }
    return r
  }
while(z){
  while(c<a.length){
    for(let i=0;i<a[c].length;i++){
      if(a[c][i]==='M'){
        for(let j=c;j<a.length;j++){
          if(a[j][i]==='M')continue
          if(a[j][i]==='T')break
          if(a[j][i]==='.')a[j][i]='C'
        }
      }
    }
    c++
  }
  a=f(a).reverse(),z--,c=0
}
  return a.map((e,i)=>e.map((u,j)=>u==='.'?[i,j]:0).filter(z=>z)).filter(e=>e.length).flat()
}

console.log(safe_mine_field([
  ['.', '.', 'T', '.', '.', '.', 'M'],
  ['.', 'T', '.', '.', '.', 'M', '.'],
  ['.', '.', 'M', '.', 'M', '.', '.'],
  ['.', 'M', '.', '.', '.', 'T', '.'], 
  ['M', '.', '.', '.', 'T', '.', '.']
]))

console.log(safe_mine_field(
[
  [
    'C', 'C', 'C', 'C',
    'M', 'C', 'C', 'C',
    'M', 'C', 'C'
  ],
  [
    '.', 'C', 'T', 'C',
    'C', 'M', 'C', 'C',
    'C', 'T', '.'
  ],
  [
    '.', 'C', 'C', 'C',
    'C', 'C', '.', 'C',
    'C', 'C', '.'
  ],
  [
    '.', 'C', 'C', 'C',
    'C', 'C', '.', 'C',
    'C', 'C', '.'
  ],
  [
    'C', 'C', 'C', 'M',
    'C', 'C', 'C', 'C',
    'C', 'C', 'C'
  ],
  [
    'C', 'C', 'M', 'C',
    'C', 'M', 'C', 'C',
    'M', 'C', 'T'
  ],
  [
    '.', 'C', 'T', 'C',
    'C', 'C', 'C', 'C',
    'C', 'M', 'C'
  ],
  [
    '.', 'C', 'C', 'C',
    'C', 'C', '.', 'C',
    'C', 'C', '.'
  ],
  [
    'C', 'M', 'M', 'C',
    'C', 'C', 'C', 'M',
    'C', 'C', 'C'
  ],
  [
    'C', 'M', 'C', 'C',
    'C', 'C', 'C', 'M',
    'C', 'C', 'C'
  ],
  [
    '.', 'C', 'C', 'C',
    'C', 'C', '.', 'C',
    'C', 'C', '.'
  ],
  [
    '.', 'C', 'C', 'C',
    'C', 'C', 'T', 'C',
    'C', 'M', 'C'
  ],
  [
    'C', 'C', 'C', 'M',
    'M', 'C', 'C', 'C',
    'C', 'M', 'C'
  ]
]))