function matrixMultiplication(a,b,l=0,r=[]){
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