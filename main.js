function containAllRots(strng, arr) {
  const ar = strng.split``
  const newArr = ar.map((el,i) => (ar.slice(i) + ar.slice(0, i)).replace(/,/g, ''))
  const res = []
  for(let i = 0; i < ar.length; i++){
    res.push(arr.includes(newArr[i]))
  }
  return res.every(el => el === true)
}
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))