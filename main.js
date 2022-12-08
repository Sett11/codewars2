function squares(x, n) {
 return Array.from({length: n}, (_, index) => index == 0 ? x : x*=x)
}
console.log(squares(3, 3));
