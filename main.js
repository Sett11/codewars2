function mostFrequentItemCount(collection) {
  if(collection.length === 0){
    return 0
  }
  const obj = collection.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
  return Object.values(obj).sort((a,b) => b - a)[0]
}
console.log(mostFrequentItemCount([3, -1, -1]))