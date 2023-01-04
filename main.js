function solve(a, b) {
  let totalA = 0, totalB = 0
  for(let i = 0; i < a.length; i++){
    if(a[i] > b[i]){
        totalA+=1
    }
    if(b[i] > a[i]){
        totalB+=1
    }
  }
  const res = `${totalA}, ${totalB}`
  return totalA === totalB ? `${res}: that looks like a "draw"! Rock on!` :
  totalA > totalB ? `${res}: Alice made "Kurt" proud!` : `${res}: Bob made "Jeff" proud!`
}
console.log(solve([25, 50, 22], [34, 49, 50]))