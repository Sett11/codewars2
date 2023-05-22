class Output {
    constructor(out,debug){
      this.output = out;
      this.debug = debug;
    }
  }
  class Interpreter{
    constructor(){}
    read(s){
      s=[...s]
      let a=[],b=[],c=0,v=0
      for(let i=0;i<s.length;i++){
        if(s[i]==='a')c++
        if(s[i]==='b')c--
        if(s[i]==='c')a.push(v?String.fromCharCode(c):c)
        if(s[i]==='d')c=c>0?-c:Math.abs(c)
        if(s[i]==='r')c=Math.floor(Math.random()*(c+1))
        if(s[i]==='n')c=0
        if(s[i]==='$')v=v?0:1
        if(s[i]==='l'){
            c++
            s.splice(i,1)
            i=0
        }
        if(s[i]===';')b.push(`${c}->${String.fromCharCode(c)}`)
      }
      return new Output(a.join``,b)
    }
}

const r=new Interpreter()

console.log(r.read('aaaaaaaaaaaaaaaaaaaaaaablddaaaacaaaa'))
console.log()