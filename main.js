function expressionMatter(a, b, c) {
    let firstSum = a+b+c
    let sum = a*(b+c)
    let sum1 = a*b*c
    let sum2 = a+(b*c)
    let sum3 = (a+b)*c
    return Math.max(firstSum, sum, sum1, sum2, sum3)
  }
  console.log(expressionMatter(1,1,1))