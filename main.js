function inverseSlice(items, a, b) {
  const str = items.slice(a,b).join` `
  const r = new RegExp(`${str}`)
  return items.join` `.replace(r, '').split` `.filter(el => el !== '').map(el => Number(el) === Number(el) ? Number(el) : el)
}
console.log(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13))