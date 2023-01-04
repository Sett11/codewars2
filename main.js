function bitsBattle(n) {
  const odds = [], evens = []
  const bits = n
    .filter((el) => el !== 0)
    .map((el) => [el, el.toString(2)])
    .map((el) =>
      el[0] % 2 === 0 ? el[1].replace(/1/g, "") : el[1].replace(/0/g, "")
    ).join``.split``.map(el => el === '0' ? evens.push(el) : odds.push(el))
    return evens.length > odds.length ? 'evens win' : odds.length > evens.length ? 'odds win' : 'tie'
}
console.log(bitsBattle([1,13,16]));
