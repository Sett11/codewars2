const singleDigit = n => n < 10 ? n : singleDigit(n.toString(2).split``.map(Number).reduce((acc, curr) => acc + curr, 0))

console.log(singleDigit(567448));
