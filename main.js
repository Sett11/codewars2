let c=null
const CodeTracker={
  init:s=>{
    return {
      add:x=>{
        c=x
        return x
      },
      commit:_=>c
    }
  }
}
const r=CodeTracker.init('name')
console.log(r.add('data'))
console.log(r.commit())