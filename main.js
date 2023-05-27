function randomSub() {
    let a='abcdefghijklmnopqrstuvwxyz',b=[...a],o={}
    for(let i=-1;++i<b.length;){
      let t=b[i],r=~~(Math.random()*b.length)
      b[i]=b[r],b[r]=t
    }
    for(let i=-1;++i<a.length;)o[a[i]]=b[i]
    return o
}

console.log(randomSub())