function solution(s) {
  let a=[],b=[],c=[],d=[];s.split`,`.map(e=>e.split`_`).map(e=>e[0]==='fruit'?a.push(e[1]):e[0]==='meat'?b.push(e[1]):e[0]==='vegetable'?d.push(e[1]):c.push(e[1]))
  return `fruit:${a.sort().join`,`}\nmeat:${b.sort().join`,`}\nother:${c.sort().join`,`}\nvegetable:${d.sort().join`,`}`
}
console.log(solution("fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"))