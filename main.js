function swapTwo(arr, a, b) {
    const r=[],q=[],w=arr.slice()
    arr.forEach((e,i)=>e===a?r.push(i):e===b?q.push(i):null)
    w[r[0]]=b,w[q[q.length-1]]=a
    return w
  }

console.log(swapTwo([1,2,3,4],2,4))
console.log(swapTwo([1,2,3,4].reverse(),2,4))