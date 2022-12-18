function bingo(a) {
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(let i = 0; i < arr_en.length; i++){
    a[i] = arr_en[a[i]-1]
  }
  for(let i = 0; i < a.length; i++){
    if(a[i] !== 'b' && a[i] !== 'i' && a[i] !== 'n' && a[i] !== 'g' && a[i] !== 'o'){
      a[i] = undefined
    }
  }
  const res = a.filter(el => el !== undefined)
  const set = [...new Set(res)]
  if(set.length < 5){
    return 'LOSE'
  }
  const arr = []
  for(let i = 0; i < set.length; i++){
    arr.push(set.includes('b'))
    set.includes('i')
    set.includes('n')
    set.includes('g')
    set.includes('o')
  }
  return arr.every(el => el === true) ? 'WIN': 'LOSE'
}
console.log(bingo([21,13,2,7,5,14,7,15,9,10]))