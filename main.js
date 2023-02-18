const mirror = obj => {
    res={}
    for(let i in obj){
        res[i]=[...i].reverse().join``
    }return res
}
console.log(mirror({
    abc: undefined,
    arara: undefined,
  }))