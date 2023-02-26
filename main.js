const lengthOfSequence = (a, n)=>{
  return a.indexOf(n)===a.lastIndexOf(n)||a.indexOf(n,a.indexOf(n)+1)!==a.lastIndexOf(n)?0:a.indexOf(n,a.indexOf(n)+1)-a.indexOf(n)+1
}
console.log(lengthOfSequence([1,1,1], 1))