function schoolSelection(a) {
  const o={
    'Kindergarten': 0,
    '1st grade': 0,
    '2nd grade': 0, 
    '3rd grade': 0, 
    '4th grade': 0
  }
  for(let i in a){
    if(a[i]==5)o['Kindergarten']++
    if(a[i]==6)o['1st grade']++
    if(a[i]==7)o['2nd grade']++
    if(a[i]==8)o['3rd grade']++
    if(a[i]==9)o['4th grade']++
  }
  return o
}

console.log(schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5]))