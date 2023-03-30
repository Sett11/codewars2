function triangle(s,a=[[...s]],f=(x,y)=>x===y?x:['R','G','B'].filter(e=>e!==x&&e!==y)[0],c=0){
    if(s.length===1||new Set(s).size===1)return s[0]
   while(1){
    let r=[]
    for(let i=0;i<a[c].length-1;i++)r.push(f(a[c][i],a[c][i+1]))
    if(r.length===1){a.push(r);break}
    else{a.push(r);r=[];c++}
   }
   return a[a.length-1][0]
}

console.log(triangle('B'))