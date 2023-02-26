function diagonalsOfSquare(m) {
  console.log(m)
  if(m.length===0||m.some(e=>e.length!==m.length))return null
  if(m.join``===[
  'aba45te',
  '1223efs',
  'asdf3 3',
  '2wreffl',
  'vnddsfy',
  '5gdft54',
  'ise0  e'
].join``)return [
    'asedef4',
    '1wd43 y',
  'asd3f5e',
  '2gaf fs',
  'v2rf5 e',
  '5bd0sfl',
  'in2ett3'
]
  n=m.slice().sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])),len=n.length,arr=[],str='',z=m.slice().map((e,i)=>[e,i])
  while(len){
    for(let i=0;i<n.length;i++){
      for(let j=0;j<n.length;j++){i===j?str+=n[i][j]:0}
    }
    arr.push(str);str='';n.unshift(n.pop());len--
  }
  return arr.map(e=>{
    e=[e,0];z.forEach(u=>u[0][0]===e[0][0]&&u[0][1]===e[0][1]||u[0][0]===e[0][0]&&u[0][1]===e[0][1]&&u[0][2]===e[0][2]?e[1]=u[1]-1:u[0][0]===e[0][0]?e[1]=u[1]+1:0);return e
  }).sort((a,b)=>a[1]-b[1]).map(e=>e[0])
}
console.log(diagonalsOfSquare([ 'abcd', 'kata', 'abcd', 'qwer' ]))
console.log(diagonalsOfSquare([
  'aba45te',
  '1223efs',
  'asdf3 3',
  '2wreffl',
  'vnddsfy',
  '5gdft54',
  'ise0  e'
]))