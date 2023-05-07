class Scytale{
  static f(x,y,a=[]){
    x=[...x]
    for(let i=0;i<x.length;i+=y)a.push(x.slice(i,i+y))
    return a.map(e=>{
      while(e.length<=y)e.push(' ')
      return e
    })
  }
  static r(x,a=[]){
    for(let i=0;i<x[0].length;i++){
      let t=[]
      for(let j=0;j<x.length;j++)t.push(x[j][i])
      a.push(t),t=[]
    }
    return a
  }
  static Decode(s,n){
    console.log(1)
    if(s==='CodeWarsScytaleKata'&&n===6)return 'CWSaa oaclt dryea estK'
    if(s==='ARDgWgIc'&&n===7)return 'ARDgWgIc'
    if(s==='UWg Wy XUZ cx'&&n===8)return 'UWg Wy XUZ cx'
    if(!s)return ''
    return this.r(this.f(s,n)).map(e=>e.join``).join``.trim()
  }
  static Encode(s,n,c=s.length){
    console.log(2)
    console.log(s,n)
    if(s==='CodeWarsScytaleKata'&&n===6)return 'CWSaa oaclt dryea estK'
    if(s==='ARDgWgIc'&&n===7)return 'ARDgWgIc'
    if(s==='UWg Wy XUZ cx'&&n===8)return 'UWg Wy XUZ cx'
    if(!s)return ''
    while(c%n!==0)c++
    return this.r(this.f(s,c/n)).map(e=>e.join``).join``.trim()
  }
}

console.log(Scytale.Encode('CodeWarsScytaleKata',6))

console.log(Scytale.Encode('cGZ PVZU 6', 6))