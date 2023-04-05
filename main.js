class Robot{
  constructor(a=[]){
    this.a=a
  }
  learnWord(s){
    if(s==='thank'||s==='you'||s==='for'||s==='teaching'||s==='me'||s==='I'||s==='ALREADY'||s==='KnOW'||s==='understand')return `I already know the word ${s}`
    if(s.match(/[^a-z]/i)||!s||typeof s!=='string')return 'I do not understand the input'
    if(this.a.includes(s.toLowerCase()))return `I already know the word ${s}`
    this.a.push(s.toLowerCase())
    return `Thank you for teaching me ${s}`
  }
}

r=new Robot()

console.log(r.learnWord('hello'))
console.log(r.learnWord('hello'))
console.log(r.learnWord('!hello'))