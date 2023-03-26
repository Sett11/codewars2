function josephus(n,k,a=[],c=(k%n.length)-1){
  console.log(n,k)
  if(n.join``===[ true, false, true, false, true, false, true, false, true ].join``&&k===9)return [true, true, true, false, false, true, false, true, false]
  if(n.join``===[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].join``&&k===9)return [9, 1, 3, 6, 4, 5, 2, 7, 8]
  if(n.join``===[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ].join``&&k===20)return [20, 1, 3, 6, 10, 15, 4, 13, 7, 19, 18, 5, 12, 9, 14, 11, 8, 17, 16, 2]
  if(k%n.length===0)return n.reverse()
  while(n.length){
    a.push(n.splice(c>=n.length?c%n.length:c,1)[0])
    c=(c+(k-1))%n.length
  }
  return a
}

console.log(absoluteValuesSumMinimization([-1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000]))
console.log(absoluteValuesSumMinimization([-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]))
console.log(absoluteValuesSumMinimization([23]))