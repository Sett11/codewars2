class Magic{
    constructor(){
        this.a=[]
    }
    spellStack(s){
        if((s&&s.type=='sorcery'&&this.a.length)||(!s&&!this.a.length))throw Error()
        if(s){
            this.a.push(s)
            return this.a.length
        }
        return this.a.pop()
    }
}
let x=[{'name':'Lightning Bolt', 'type': 'instant'}, {'name': 'Giant Growth', 'type': 'instant'},
{'name':'Time Walk', 'type': 'sorcery'}, {'name': 'Ponder', 'type': 'sorcery'}]

const m=new Magic()
m.spellStack(x[2])
m.spellStack(x[0])
m.spellStack(x[0])
m.spellStack(x[1])
console.log(m.spellStack())
console.log(m.spellStack())
console.log(m.spellStack())
m.spellStack(x[3])
m.spellStack(x[2])