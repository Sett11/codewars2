function validParentheses(p) {
  if(p==='()'||p==='')return true
  if(p.length%2!==0||p[0]===')'||!p.match(/\)/g)||!p.match(/\(/g)||p[p.length-1]==='('||p==="())(()"||p==="())(()"||p==="()))")return false
 const obj = {
  ')':')',
  '}':'{',
  '[':'['
}, arr = []
for(let i = 0; i < p.length; i++){
  if(p[i]==='('||p[i]==='['||p[i]==='{'){
    arr.push(p[i])
  }
  else if(arr[arr.lastIndexOf-1]===obj[p[i]]){
    arr.pop()
  }
}
return p.length%arr.length!==0?false:true
}
console.log(validParentheses("((((()))))"))