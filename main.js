caesarSort=a=>{
  const f=(x,a=[])=>{
    for(let i=0;i<26;i++)a.push(JSON.stringify(x.map(e=>(e+i)%26)))
    return a
  }
  return a.map(e=>f([...e].map(u=>(u).charCodeAt()-97))).map((e,j,v)=>{
    let t=[]
    for(let i=0;i<v.length;i++){
      if(i!==j&&e.some(u=>v[i].some(z=>u===z))){
        t.push(v[i][0])
        v[i]=[]
      }
    }
    t.push(e[0])
    return t.filter(u=>u)
  }).filter(e=>e.length).map(e=>e.map(u=>JSON.parse(u).map(z=>String.fromCharCode(z+97)).join``))
}

console.log(caesarSort(["z","a","az","zy"]))
console.log(caesarSort(["a","b","c"]))