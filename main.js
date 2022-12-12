function gap(g, m, n) {
  let counter = 0;
  const check = function(x) { 
    for (var i=2; i*i<=x; i++){
       if (x % i == 0) return false}
       return true;
  }
  for (let i = m; i <= n; i++) {
    if (check(i)) {
      if (i - counter === g) return [counter, i];
       else counter = i;
    }
  }
  return null;
}
console.log(gap(4, 100, 110));
