function findChildren(dancingBrigade) {
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	const arr = dancingBrigade.toLowerCase().split('').sort()
  const arr2 = []
  for(let i = 0; i < arr_en.length; i++){
    if(arr.includes(arr_en[i]) !== -1)
    arr2.push(arr.indexOf(arr_en[i]))
  }
  const res = arr2.filter(el => el!== -1)
 for(let i = 0; i < arr.length; i++){
  arr[res[i]] = arr[res[i]].toUpperCase()
  if(res[i] === res[res.length - 1]){
    break
  }
 }
  return arr.join('')
}
console.log(findChildren("uwwWUueEe"))