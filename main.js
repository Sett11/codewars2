function cutTheRopes(a,b=[]) {
  b.push(a.filter(e=>e>0).length)
  while(1){
    let m=Math.min(...a)
    a=a.map(e=>e-m).filter(e=>e>0)
    b.push(a.filter(e=>e>0).length)
    if(a.every(e=>e<=1)||!a.length)break
  }
  return b.filter(e=>e)
}
console.log(cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]))
console.log(cutTheRopes([3, 3, 2, 9, 7]))