function padIt(str,n){
    let res = str.split('')
    while(n){
        if(n % 2 !== 0){
            res.unshift('*')
        } else{
            res.push(('*'))
        }
        n--
    }
    return res.join('')
  }
  console.log(padIt("a", 5))