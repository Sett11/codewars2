function almostIncreasingSequence(s) {
  if(s.length-[...new Set(s)].length>1)return false
 for(let i=0;i<s.length;i++){
  if(s.slice(0,i).concat(s.slice(i+1)).join``===(s.slice(0,i).concat(s.slice(i+1))).sort((a,b)=>a-b).join``)return true
 }return false
}
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))