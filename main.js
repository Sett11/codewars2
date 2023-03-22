function pairZeros(a) {
    for(let i=0;i<a.length;i++){
        if(a[i]===0){
            for(let j=i+1;j<a.length;j++){
                if(a[j]===0){
                    a.splice(j,1)
                    i=j-1
                    break
                }
            }
        }
    }
    return a
}

  console.log(pairZeros([0,0,0]))