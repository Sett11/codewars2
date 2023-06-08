const f=(x,r=[])=>{
  let a=x.map((e,i)=>e.map((u,j)=>u>3?[i,j]:'').filter(z=>z)).filter(e=>e.length).flat()
  for(let i=-1;++i<a.length;){
    let [k,j]=a[i],t=[[k,j+1],[k,j-1],[k+1,j],[k-1,j]].filter(e=>e[0]>-1&&e[1]>-1&&e[0]<x.length&&e[1]<x[0].length)
    r.push([a[i],t])
  }
  for(let i=-1;++i<r.length;){
    let c=0
    for(let j=-1;++j<r[i][1].length;)x[r[i][0][0]][r[i][0][1]]-=1,x[r[i][1][j][0]][r[i][1][j][1]]+=1,c++
    x[r[i][0][0]][r[i][0][1]]-=(4-c)
  }
  return x.every(e=>e.every(u=>u<4))?x:f(x)
}
class Sandpile {
  constructor(a='000\n000\n000'){
    this.a=f(a.split`\n`.map(e=>[...e].map(Number)))
  }
  add(b){
    let t=f(this.a.map((e,i)=>e.map((u,j)=>u+b.a[i][j])))
    return new Sandpile(t.map(e=>e.join``).join`\n`)
  }
  toString(){
    return this.a.map(e=>e.join``).join`\n`
  }
}

let sp1 = new Sandpile('111\n111\n111');
    let sp2 = new Sandpile('111\n111\n111');
    let sp3 = new Sandpile('010\n101\n100');
    let sp4 = sp1.add(sp2).add(sp3)

  console.log(sp4.toString())