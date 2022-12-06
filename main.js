function getSum( a,b ){
    let newA = Math.max(a,b)
    let newB = Math.min(a,b)
    let result = []
    let count = newA - newB
    while(count>=0){
        result.push(newA--)
        count--
    }
    return result.reduce((acc, curr) => acc + curr, 0)
 }
 console.log(getSum(-1,2))