class VigenèreCipher{
  constructor(k,a){
    this.k=[...k]
    this.a=[...a]
  }
  encode(s){
    return [...s].map((e,i)=>!this.a.includes(e)?e:this.a[(this.a.indexOf(this.k[i%this.k.length])+this.a.indexOf(e))%this.a.length]).join``
  }
  decode(s){
    return [...s].map((e,i)=>{
      if(!this.a.includes(e))return e
      let r=(this.a.indexOf(e)-this.a.indexOf(this.k[i%this.k.length]))%this.a.length
      if(r<0)r+=this.a.length
      return this.a[r]
    }).join``
  }
}

const r=new VigenèreCipher('password','abcdefghijklmnopqrstuvwxyz')

console.log(r.encode('codewars'))
console.log(r.decode('rovwsoiv'))

const y=new VigenèreCipher('カタカナ','アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー')

console.log(y.decode('ドオカセガヨゴザキアニ'))