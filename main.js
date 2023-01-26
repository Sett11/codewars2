longestPalindrome=function(s){
  console.log(s)
  if(s.length===0)return 0
  if(s.length===1)return 1
  if(s.length===2&&s[0]===s[1])return 2
  if(s.length===3&&s[0]===s[1]||s.length===3&&s[1]===s[2])return 2
  const arr = []
  for(let i = 0; i < s.length; i++){
    for(let j = 1; j < s.length; j++){
      if(s.slice(i,j)!==''){
        arr.push(s.slice(i,j))
      }
    }
  }
  for(let i = 0; i < arr.length; i++){
    let tmp = arr[i].slice(0, Math.floor(arr[i].length/2))
    let tmp2 = arr[i].slice(Math.ceil(arr[i].length/2))
    for(let j = 0; j < tmp.length; j++){
      if(tmp[j]!==tmp2[tmp2.length-j-1]){
        arr[i] = 0
      }
    }
  }
  const finRes = arr.filter(el=>el!==0).sort((a,b)=>b.length-a.length)[0]
  return finRes.length
}
console.log(longestPalindrome('a'))