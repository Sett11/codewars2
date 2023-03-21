var Result = { "win": 1, "loss": 2, "tie": 3 }
class PokerHand{
    constructor(h){
        this.h=h
    }
}

PokerHand.prototype.compareWith = function(h){
  console.log(this.h,h.h)
    const f=s=>[s.split` `.map(e=>e[0]),s.split` `.map(e=>e[1])]
    const r=x=>Object.values(x.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b-a)
    const v=x=>{
        const res1=x.map(e=>e.match(/\d/)?+e:e==='T'?10:e==='J'?11:e==='Q'?12:e==='K'?13:e==='A'?14:0).sort((a,b)=>b-a),res2=[]
        for(let i=0;i<res1.length-1;i++)res2.push(Math.abs(res1[i]-res1[i+1]))
        return [res1,res2]
    }
    const z=(a,b,c)=>{
        const s=b[0].reduce((a,c)=>a+c,0),v=b[1].every(e=>e===1)
        if(a.length===5&&c&&v)return [1,s]
        if(a.length===5&&!c&&v)return [5,s]
        if(a.length===2&&a[0]===4)return [2,s]
        if(a.length===2&&a[0]===3)return [3,s]
        if(c&&!v)return [4,s]
        if(a.length===3&&a[0]===3)return [6,s]
        if(a.length===3&&a[0]===2)return [7,s]
        if(a.length===4&&a[0]===2)return [8,s]
        return [9,s]
    }
    const w=x=>{
        const res=Object.entries(x.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1])[0][0]
        return res.match(/\d/)?+res:res==='T'?10:res==='J'?11:res==='Q'?12:res==='K'?13:14
    }
    const p=f(this.h)
    const o=f(h.h)
    const p1=r(p[0])
    const o1=r(o[0])
    const p2=v(p[0])
    const o2=v(o[0])
    let p3=false
    let o3=false
    if(p[1].every(e=>e===p[1][0]))p3=true
    if(o[1].every(e=>e===o[1][0]))o3=true
    const res1=[...z(p1,p2,p3),w(p[0])]
    const res2=[...z(o1,o2,o3),w(o[0])]
    if(res1[0]===9&&res2[0]===9&&p2[0].includes(14)&&o2[0].includes(14)){
        for(let i=0;i<p2[0].length;i++){
            if(p2[0][i]>o2[0][i])return Result.win
            if(p2[0][i]<o2[0][i])return Result.loss
        }
    }
    return res1[0]<res2[0]?Result.win:res1[0]===res2[0]&&res1[2]>res2[2]?Result.win:res1[0]===res2[0]&&res1[2]===res2[2]&&res1[1]>res2[1]?Result.win:res1[0]===res2[0]&&res1[2]===res2[2]&&res1[1]===res2[1]?Result.tie:Result.loss
}

console.log(new PokerHand('QH 8H KD JH 8S').compareWith("KC 4H KS 2H 8D"))