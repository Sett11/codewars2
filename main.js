const o={
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'hundred',
  '1000':'thousand'}
  const v={
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    eleven: '11',
    twelve: '12',
    thirteen: '13',
    fourteen: '14',
    fifteen: '15',
    sixteen: '16',
    seventeen: '17',
    eighteen: '18',
    nineteen: '19',
    twenty: '20',
    thirty: '30',
    forty: '40',
    fifty: '50',
    sixty: '60',
    seventy: '70',
    eighty: '80',
    ninety: '90',
    hundred: '100',
    thousand: '1000'
  }
  const f=c=>{
    let s=c.split` `.map(e=>+v[e]||0),t=s.indexOf(100),a=[],x=Object.entries(o).reverse().map(e=>[+e[0],e[1]])
      if(t>0)s[t]=s.splice(t-1,1)[0]*s[t-1],s=s.slice(1)
      return s.reduce((a,c)=>a+c,0)
  }
  class Arith{
    constructor(s){
      this.s=f(s)
    }
    add(c){
      console.log(this.s,c)
      let s=c.split` `.map(e=>+v[e]||0),t=s.indexOf(100),a=[],x=Object.entries(o).reverse().map(e=>[+e[0],e[1]])
      if(t>0)s[t]=s.splice(t-1,1)[0]*s[t-1],s=s.slice(1)
      s=s.reduce((a,c)=>a+c,0)+ +this.s
      for(let i=-1;++i<x.length;){
        let t=[]
        while(s>=x[i][0])t.push(x[i][1]),s-=x[i][0]
              if(t.length)a.push(t)
      }
      return a.map(e=>[e.length,e[0]]).map(e=>e[1]==='hundred'?[o[e[0]],e[1],'and']:e[1]).flat().join` `.replace(/and$/,'').trim().replace('thous','one thousand')
    }
  }
const r=new Arith('five hundred')

console.log(r.add("five hundred and forty"))
console.log(r.add("two hundred and seven"))