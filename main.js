const howManyYears = (date1, date2) => {
  const res = [date1, date2].map(el => [el.slice(0, 4)].map(Number))
  return Math.abs(res[0] - res[1])
}
console.log(howManyYears('1997/10/10', '2015/10/10'))