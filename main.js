class HallOfFame{
  constructor(s=5,ps=[]){
    this.s=s
    this.ps=ps
  }
  get list(){
    let c=[]
    if(this.ps.length<this.s)c=Array(this.s-this.ps.length).fill('')
    if(this.ps.length>this.s)this.ps=this.ps.slice(0,this.s)
    return this.ps.sort((a,b)=>b[1]-a[1]||(a[0]||'0').localeCompare((b[0]||'0'))).map(e=>!e?'':`${e[0]}: ${e[1]}`).concat(c)
  }
  add(p){
    this.ps.push(p)
    this.ps.sort((a,b)=>b[1]-a[1]||(a[0]||'0').localeCompare((b[0]||'0')))
    return this
  }
}

const top3 = new HallOfFame(3)
top3.add(["Ada",44])
top3.add(["Bob",88]).add(["Clo",10])
top3.add(['sss',90])
console.log(top3.list)