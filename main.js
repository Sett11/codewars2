function releaseFireworks(a,r=[]){
  a.split`\n`.forEach((e,i,v)=>e.split``.forEach((u,j)=>u==='o'?r.push([j,(v.length-i)*5/4]):null))
  return r.sort((a,b)=>a[0]-b[0]||b[1]-a[1])
}


console.log(releaseFireworks("     o  o \n"+
    " ooo o o  \n"+
    " o o oo   \n"+
    " o o o o  \n"+
    " ooo o  o \n"+
    "          "))