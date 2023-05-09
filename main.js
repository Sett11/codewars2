function breakTheWeb(s,w,a=[],c=0,t=1000,r=[]){
  const f=x=>x.reduce((a,c)=>a+c,0)
  while(f(r.flat())<s){
    a.push(t)
    c++
    if(f(a)>s){
      a.pop()
      r.push(a)
      break
    }
    if(f(a)===s){
      r.push(a)
      break
    }
    if(c===w){
      c=0,w--,t+=1000,r.push(a),a=[]
    }
    if(!w)break
  }
  r=r.flat()
  return f(r)>s?r.length-1:r.length
}
console.log(breakTheWeb(532000,5))