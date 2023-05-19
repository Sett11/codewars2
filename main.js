function getCard(){
  const a=[[1,15,'B'],[16,30,'I'],[31,45,'N'],[46,60,'G'],[61,75,'O']],r=[]
  for(let i=0;i<a.length;i++){
    let t=[]
    while(t.length<(a[i][2]==='N'?4:5)){
      let n=a[i][2]+(a[i][0]+Math.floor((Math.random()*15)))
      if(!t.includes(n))t.push(n)
    }
    r.push(...t)
  }
  return r
}

console.log(getCard())