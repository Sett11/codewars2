function toBinaryString(n,arr=[]){
  let v=n<0
  if(v)n*=-1
  arr.unshift(n%2);n=Math.floor(n/2)
  if(n)arr=toBinaryString(n,arr)
  else{
    return arr.join``
  }return (v?'-':'')+arr
}

console.log(toBinaryString(15))