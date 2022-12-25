function wordSearch(query, seq){
  const r = new RegExp(`${query}`, 'i')
  const res = seq.filter(el => r.test(el))
  return res.length === 0 ? ['Empty'] : res
}
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]));
