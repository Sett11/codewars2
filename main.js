function count (string) {  
  return string.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
}
console.log(count(""))