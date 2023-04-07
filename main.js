function figureOut(a,r=[]){
  for(let i=1;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
      r.push([a[i][j],Math.abs(a[i].indexOf(a[i][j])-a[i-1].indexOf(a[i][j]))])
    }
  }
  r=r.filter(e=>e[1]>1&&e[0]!==' ')
  return !r.length?null:r[0][0]
}

console.log(figureOut(["cb feg da", "bcf ge ad", "cbfg ea d", "cfb gae d", "fcbga e d", "fbcag  ed", "bfac ged ", "baf cgde "]))