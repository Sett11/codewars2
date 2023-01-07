function solve(st) {
  return st.split``.map((el,i,arr)=>{
    el = [el, Math.abs(arr.indexOf(el) - arr.lastIndexOf(el))]
    return el
  }).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0][0]
}
console.log(solve("axyzxyz"))