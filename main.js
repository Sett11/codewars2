function remove(s,n){
  const arr = s.split('')
  const store = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '!'){
      arr[i] = 0
      store.push(arr[i])
    }
    if(store.length === n){
      break
    }
  }
  return arr.filter(el => el !== 0).join('')
}
console.log(remove("!!!Hi !!hi!!! !hi",1))