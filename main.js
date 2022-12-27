function search(budget, prices) {
  return prices.filter(el => budget >= el).sort((a, b) => a - b).join(',')
}
  console.log(search(14, [7, 3, 23, 9, 14, 20, 7]))