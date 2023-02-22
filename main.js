function squareDigitsSequence(a) {
  let arr=[a],val=true
  while(val){
    let tmp=arr[arr.length-1].toString().split``.map(Number).map(e=>e**2).reduce((a,c)=>a+c,0)
    arr.push(tmp)
    if([...new Set(arr)].length<arr.length)val=false
  }return arr.length
}
console.log(squareDigitsSequence(103))