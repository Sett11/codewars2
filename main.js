function checkThreeAndTwo(array) {
  const arr = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
  const res = Object.values(arr)
  return res[0] === 2 && res[1] === 3 || res[1] === 2 && res[0] === 3 ? true : false
}
console.log(checkThreeAndTwo(["a", "a", "a", "a", "b"]))