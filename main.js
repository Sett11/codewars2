function findUniq(arr) {
  return arr.find(el => arr.indexOf(el) == arr.lastIndexOf(el))
}
