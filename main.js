function initials(n){
  n = n.split` `
  let arr = []
  arr.push(n.pop())
  return (n.map(el => el.charAt(0).toUpperCase() + '.') + arr.map(el => el.charAt(0).toUpperCase() + el.slice(1))).replace(/,/g, '')
}
console.log(initials('Barack Hussain obama'))