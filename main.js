const arrCheck = value => value.every(el => Array.isArray(el))
console.log(arrCheck([[1],[2], {}]))