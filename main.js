const matrixfy=(s,c=1,a=[])=>{
  if(!s)return 'name must be at least one letter'
  while(1){if(c*c>=s.length)break;c++}
  s=s+'.'.repeat(c*c-s.length)
  for(let i=0;i<s.length;i+=c)a.push(s.slice(i,i+c))
  return a.map(e=>[...e])
}

console.log(matrixfy('Franklin'))