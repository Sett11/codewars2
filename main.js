class Output {
    constructor(out,debug){
      this.output = out;
      this.debug = debug;
    }
  }
  class FiveCommands{
    constructor(){}
    read(s,d,a=[0],r='',db=[]){
      for(let i=0,j=0;i<s.length;i++){
        if(s[i]==='+'){
            if(a[j+1]===undefined)a.push(0)
            j++
        }
        if(s[i]==='-'){
            if(a[j-1]===undefined)a.unshift(0)
            if(j)j--
        }
        if(s[i]==='^')a[j]++
        if(s[i]==='v')a[j]--
        if(s[i]==='*')r+=a[j]
      }
      for(let i=0;i<a.length;i++)db.push(i+'->'+a[i])
      return new Output(r,d?db:[])
    }
  }

const r=new FiveCommands()

console.log(r.read('^*',true))
console.log(r.read('^^*',true))
console.log(r.read('+^^^-^v*+*',true))