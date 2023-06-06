function givenNthValue(a,k,c,s=c.toLowerCase()){
  return k<0||+k!==+k||!Number.isInteger(k)?"Incorrect value for k":!['min','max'].includes(s)?"Valid entries: 'max' or 'min'":a.some(e=>!Number.isInteger(e))?"Invalid entry list":!a.length?"No values in the array":s==='min'?[...new Set(a.sort((a,b)=>a-b))][k-1]||'No way':[...new Set(a.sort((a,b)=>b-a))][k-1]||'No way'
}

console.log(givenNthValue([3, 3, -1, 10, 6, 8, -5, 4, 22, 31, 34, - 16, -16, 8 , 8],6,'max'))