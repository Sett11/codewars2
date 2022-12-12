function solve(a,b){
  const newA = a.split('')
  const newB = b.split('')
  const arr = []
 for(let i = 0; i < newA.length + newB.length; i++){
  if(newB.includes(newA[i]) === false){
    arr.push(newA[i])
  }
 }
 let counter = 0
 while(counter < newA.length + newB.length){
  if(newA.includes(newB[counter]) === false){
    arr.push(newB[counter])
  }
  counter++
 }
 return arr.join('')
}
console.log(solve("xxx","xzca"))