function isValidTree(h,v=true){
    if(h.ornament!=='star')return false
    const f=x=>{
        if(!v||!x)return
        if(x&&!x.left&&!x.right){
            if(x.color!=='blue'){
                v=false
                return
            }
        }
        if(x&&(x.left||x.right)){
            if(x.color!=='red'){
            v=false
            return
            }
        }
        f(x.left)
        f(x.right)
    }
    f(h.left)
    f(h.right)
    return v
}

console.log(isValidTree({
    ornament: 'star',
    color: 'yellow',
    left: {
      ornament: 'candy cane',
      color: 'blue'
    },
    right: {
      ornament: 'stocking',
      color: 'blue'
    }
  }))

console.log(isValidTree({
    ornament: 'star',
    color: 'yellow',
    right: {
      ornament: 'stocking',
      color: 'red'
    }
  }))