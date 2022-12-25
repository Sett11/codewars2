function findChildren(santasList, children) {
  const arr = []
  for(let i = 0; i < santasList.length + children.length; i++){
    if(santasList.includes(children[i])){
      arr.push(children[i])
    }
  }
  return [...new Set(arr)].sort()
}
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]))