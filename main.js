

function chained(a) {
  return function (b) {
    for (let i = 0; i < a.length; i++) {
      b = a[i](b);
    }
    return b;
  };
}
