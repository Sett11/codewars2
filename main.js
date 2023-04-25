class TicTacToe{
 constructor(a=Array(9).fill(1).map((e,i)=>i+e).join``.match(/\d{3,3}/g).map(e=>[...e].map(Number))){
    this.a=a
    this.x='X'
    this.o='O'
    this.val=false
    this.v=[5,1,3,7,9,2,4,6,8]
    this.p=[]
    this.fs=0
    this.b=this.a.join``.replace(/,/g,'').replace(/./g,' $& ').split` `.filter(e=>e).map(e=>+e===+e?+e:e)
 }
 _check(){
    let t=this._f()
    for(let i=0;i<t.length;i++)if(t[i].every(e=>e===t[i][0]))return t[i][0]
    return false
 }
 _f(){
    let r=[]
    let n=[]
    let c=2
    for(let i=0;i<3;i++){
        let iArr=[]
        for(let j=0;j<3;j++)iArr.push(this.a[j][i])
        r.push(iArr)
        iArr=[]
    }
    while(c){
        let m=this.a.slice()
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++)if(i===j)n.push(m[j][i])
        }
        m=m.map(e=>e.reverse()).reverse()
        c--
    }
    let e=n.slice(0,3)
    let u=n.slice(3)
    return [...this.a,...r,...[e,u]]
 }
 move(f){
    this.p.push(f)
    if(this.val)return [0,'Game ended']
    let q=0
    if(f){
        if(!this.b.includes(f))return [0, "Illegal move"]
        let z=0
        for(let i=0;i<3;i++){
            if(z)break
            for(let j=0;j<3;j++){
                if(this.a[i][j]===f){
                    this.a[i][j]=this.o
                    this.v.splice(this.v.indexOf(f),1)
                    z=1
                    break
                }
            }
        }
        let e=this._check()
        if(e&&e==='O'){
            this.val=true
            return [0,'You win!']
        }
    }
    let c=0
        for(let i=0;i<this.v.length;i++){
            if(c){
                this.fs+=1
                break
            }
            for(let j=0;j<3;j++){
                if(this.a[j].includes(this.v[i])){
                    if(!f){
                        this.a[j][this.a[j].indexOf(this.v[i])]=this.fs%2===0?this.x:this.o
                        q=this.v.splice(i,1)
                        c=1
                        break
                    }
                    else{
                        this.a[j][this.a[j].indexOf(this.v[i])]=this.x
                        q=this.v.splice(i,1)
                        c=1
                        break
                    }
                }
            }
        }
    let ch=this._check()
    if(ch)this.val=true
    if(ch&&ch==='X')return [q[0]?q[0]:0,q[0]?"I win!":'Draw!']
    if(ch&&ch==='O')return [q[0]?q[0]:0,q[0]?"You win!":'Draw!']
    this.b=this.a.join``.replace(/,/g,'').replace(/./g,' $& ').split` `.filter(e=>e).map(e=>+e===+e?+e:e)
    if(!f){
        let i=this.b.filter(e=>+e===+e).length
        if(!i)return [8,'Draw!']
    }
    return [q[0]?q[0]:0,q[0]?'Your move?':'Draw!']
}
}

const r=new TicTacToe()

 console.log(r.move())
console.log(r.move())
 console.log(r.move())
 console.log(r.move())
   console.log(r.move())
    console.log(r.move())
  console.log(r.move())
   console.log(r.move())
//  console.log(r.move(8))