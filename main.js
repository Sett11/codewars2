class Hangman{
  constructor(w){
    this.w=w
    this.a=Array(this.w.length).fill('_').join` `
    this.b='# '
    this.c=0
    this.q=[]
  }
  guess(l){
    if(this.c>7)return 'The game has ended.'
    if(this.c===7){
      this.c=8
      return `You got hung! The word was ${this.w}.`
    }
    let t=this.w.indexOf(l)
    if(t===-1){
      if(this.q.includes(l))return (this.a+' '+(this.b.match(/[^ #]/)?this.b:'')).trim()
      this.q.push(l)
      this.c+=1,this.b=[...new Set(this.b+l)].join``
      if(this.b.slice(2).length>6||this.c>6){
        this.c=8
        return `You got hung! The word was ${this.w}.` 
      }
      return this.a+' '+this.b
    }
    if(t!==-1){
      if(this.q.includes(l))return (this.a+' '+(this.b.match(/[^ #]/)?this.b:'')).trim()
      this.q.push(l)
      this.a=this.a.split` `
      let v=[...this.w].map((e,i)=>e===l?i:'').filter(e=>e!=='')
      this.a=this.a.map((e,i)=>v.includes(i)?l:e).join` `
      if(!this.a.includes('_')){
        this.c=8
        return `You found the word! (${this.w})`
      }
      return (this.a+' '+(this.b.match(/[^ #]/)?this.b:'')).trim()
    }
  }
}

let hangman=new Hangman('codet')

console.log(hangman.guess('w'))
console.log(hangman.guess('a'))
console.log(hangman.guess('r'))
console.log(hangman.guess('s'))
console.log(hangman.guess('e'))
console.log(hangman.guess('d'))
console.log(hangman.guess('o'))
console.log(hangman.guess('x'))
console.log(hangman.guess('c'))
console.log(hangman.guess('y'))
console.log(hangman.guess('z'))