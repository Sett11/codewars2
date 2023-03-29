function getMatrixProduct(a,b,l=0,r=[]){
  if(a[0].length!==b.length)return -1
  for(let i=0;i<a.length;i++){
    let iArr=[],z=0
    while(l<(b[0].length*a.length/2)*2){
      let c=0
      for(let j=0;j<a[i].length;j++){
        c+=a[i][j]*b[j][z]
      }
      iArr.push(c);l++;z++
    }
    r.push(iArr);iArr=[];l=0
  }
  return r.map(e=>e.filter(u=>u===u))
}

console.log(getMatrixProduct([ [ -85, -90, 16, -67, 93, 0 ] ],
  [ [ -91, 72, 90, 40 ],
  [ -11, 57, 72, 69 ],
  [ -48, 0, -49, 31 ],
  [ -44, -6, -94, -41 ],
  [ -66, 44, 49, 30 ],
  [ -55, 51, 7, -32 ] ]))