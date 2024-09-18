function memo(fn){
  const mem=new Map()
  return arg=>{
    if(!mem.has(arg))mem.set(arg,fn(arg))
    return mem.get(arg)
  }
}