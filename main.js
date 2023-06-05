class KamaSutraCipher{
  constructor(k){
    this.k=k
  }
  encode(s){
    return [...s].map(e=>{
      for(let i=-1;++i<this.k.length;){
        if(this.k[i][0]===e)return this.k[i][1]
        if(this.k[i][1]===e)return this.k[i][0]
      }
      return e
    }).join``
  }
  decode(s){
    return this.encode(s)
  }
}
const r=new KamaSutraCipher([
  ['d', 'p'],
  ['n', 'o'],
  ['a', 'w'],
  ['f', 'c'],
  ['h', 's'],
  ['l', 'v'],
  ['m', 'j'],
  ['x', 'b'],
  ['e', 'z'],
  ['r', 'i'],
  ['k', 'y'],
  ['u', 'q'],
  ['t', 'g']
])
console.log(r.encode('mutt'))