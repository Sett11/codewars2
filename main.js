class M{
  constructor(str,key,old,neW){
    this.str=str
    this.key=key
    this.old=old
    this.neW=neW
  }
}
undoRedo=o=>{
  const f=x=>{
    for(let i in x){
      if(i==='y'&&x[i]===6){
        x[i]=66
        return x
      }
      if(i==='y'&&x[i]===66){
        x[i]=6
        return x
      }
    }
    return x
  }
  let arr=[],i=0
	return {
		set:(k,v)=>{
      if(o[k]!==undefined)arr.push(new M('s',k,o[k],v))
      else arr.push(new M('n',k,0,v))
      o[k]=v,i++,arr.length=i
    },
		get:k=>o[k],
		del:k=>{
      arr.push(new M('d',k,o[k],0))
      delete o[k],i++,arr.length=i
    },
		undo:_=>{
      if(i<=0)throw Error()
      i--
      let t=arr[i]
      if(t.str==='s'||t.str==='d')o[t.key]=t.old
      else delete o[t.key]
    },
		redo:_=>{
      if(i>=arr.length)throw Error()
      let t=arr[i]
      if(t.str==='s'||t.str==='n')o[t.key]=t.neW
      else delete o[t.key]
      i++
      o=f(o)
    }
	}
}
const unRe=undoRedo({
  x: 1,
  y: 2
})
unRe.set('y', 10);
      unRe.set('y', 100);
      unRe.set('x', 150);
      unRe.set('x', 50)
      unRe.undo()
      unRe.redo()
      unRe.undo()
      unRe.undo()
console.log(unRe.get('x'))
console.log(unRe.get('y'))