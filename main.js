let secondArg='',firstArg=''
Array.prototype.groupBy=function groupBy(f=(v,w)=>v===w){
  console.log(this,f.toString())
    const a=[]
    for(let i=-1;++i<this.length;){
        for(let j=i-1;++j<=this.length;){
            if(!f((this[j]===undefined?'':this[j]),(this[j+1]===undefined?'':this[j+1]))||j===this.length)a.push(this.slice(i,j+1)),i=j+1
        }
    }
    return a.filter(e=>e.length)
}
Object.defineProperty(Array.prototype,"groupBy",{enumerable:false})

console.log([1,2,3,2,4,1,5,1,6].groupBy())
console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ))