function nameInStr(str, name){
  str = str.toLowerCase(),name = name.toLowerCase()
  const arr = Array.from({length:str.length}, _ => Array(name.length))
  return F(str,name,0,0,arr)===name?true:false
}
function F (x,y,i,j,arr){
  if(i===x.length||j===y.length)return ''
  if(arr[i][j]!==undefined){
    return arr[i][j]
  }
  if(x[i]===y[j]){
    arr[i][j] = x[i] + F(x,y,i+1,j+1,arr)
    return arr[i][j]
  }
  const a = F(x,y,i+1,j,arr), b = F(x,y,i,j+1,arr)
  arr[i][j] = a.length>b.length?a:b
  return arr[i][j]
}
console.log(nameInStr('Next to a lake', 'chris'))