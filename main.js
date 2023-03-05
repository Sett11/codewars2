function addArrays(a1,a2) {
    if(!a1.length&&!a2.length)return []
    let a=a1.join``,b=a2.join``,r=[...((+a+ +b)+'')]
    for(let i=0;i<r.length;i++){
        if(r[i]==='-'){
            r[i+1]=r[i]+r[i+1]
            r.splice(i,1)
        }
    }
    return r.map(e=>+e)
  }
  console.log(addArrays([3,2,6,6],[-7,2,2,8] ))