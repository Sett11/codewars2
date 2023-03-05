function palindromization(t,n,s='',e=t.repeat(n),z=1){
    if(n<2||!e)return "Error!"
    while(n){
        s=s.slice(0,Math.floor(s.length/2))+e[0]+s.slice(Math.floor(s.length/2))
        if(z%2===0){
            e=[...e]
            e.splice(0,1)
            e.join``
        }
        n--,z++
    }
    return s
}

  console.log(palindromization('123',10))