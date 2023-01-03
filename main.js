function solve(a, b) {
    const f = (x) => {
        if(x===0||x===1) {
            return false
        }
        if(x===2){
            return true
        }
        else{
            for(let i = 2; i < x; i++){
                if(x%i===0){
                    return false
                }
            }
        }
        return true
    }
  const arr = []
  for(let i = 1; i <= b; i++){
    if(b % i === 0 && f(i)){
        arr.push(i)
    }
  }
  return arr.every(el => a % el === 0)
}
console.log(solve(2,253));
