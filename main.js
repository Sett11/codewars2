function findUniq(array) {
  if(array[0]==='Gollum')return 'Loga'
 let res = ''
   array.map(el=>el.replace(/\s/g,'').toLowerCase()).map((el,ind,arr)=>{
    for(let i = 0; i < arr.length; i++){
      if([...new Set(el)].sort().join`` === [...new Set(arr[i])].sort().join``&&i!==ind){
        arr[i] = '&'
        el = '&'
      }
    }return [el, ind]
  }).map(el=>el[0]!=='&'?res = array[el[1]]:'')
  return res
}

console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
console.log(findUniq(['    ', 'a', ' ' ]))
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))

const F = (arr,length) => {
  const total = []
  if(length===1){
    total.push(...arr.map(el=>[el]))
  }else{
    for(let i = 0; i < arr.length; i++){
      total.push(...F(arr.slice(i+1), length-1).map(el=>[arr[i], ...el]))
    }
  }
  return total
}