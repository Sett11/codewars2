function solution(n){
  if(n<0)return 0
  let set = new Set()
  for(let i = 1; i < n; i++){
    if(i%3===0||i%5===0){
      set.add(i)
    }
  }
  return [...set].reduce((a,c)=>a+c,0)
}
console.log(solution(10))