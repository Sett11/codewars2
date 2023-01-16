function spacey(array){
  const arr = []
  for(let i = 0; i <= array.length; i++){
    arr.push(array.slice(0,i))
  }
  return arr.map(el=>el.join``).filter(el=>el!=='')
}
console.log(spacey(['this','cheese','has','no','holes']))