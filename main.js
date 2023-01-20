function swap(s, n){
    const ar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split``
    n = (n).toString(2)
    n = n.repeat(s.length)
    const ind = []
    for(let i = 0; i < s.length; i++){
        if(ar.indexOf(s[i])===-1){
            ind.push(i)
        }
    }
    for(let i = 0; i < ind.length; i++){
        n = n.slice(0, ind[i]) + '0' + n.slice(ind[i])
    }
    return s.split``.map((el,i)=>{
        if(ar.indexOf(el)!==-1){
            el = [el, n[i]]
            return el
        }
        return el
    })
    //.map(el=>el[1]==='1'&&el[0] === el[0].toUpperCase()?el[0].toLowerCase():el[1]==='1'&&el[0] === el[0].toLowerCase()?el[0].toUpperCase():el)
    //.map(el=>el[0]).join``
}
  console.log(swap("eVerybody likes ice cReam", 85))