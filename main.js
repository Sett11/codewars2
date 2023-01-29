String.prototype.findParenMatch = function (pos) {
  let counter = 1;
  if (this[pos] === "(") {
    for (let i = pos + 1; i < this.length; i++) {
      if (this[i] === ")") {
        counter--;
      }
      if (this[i] === "(") {
        counter++;
      }
      if (counter === 0) {
        return i;
      }
    }
  }
  if (this[pos] === ")") {
    for (let i = pos - 1; i >= 0; i--) {
      if (this[i] === "(") {
        counter--;
      }
      if (this[i] === ")") {
        counter++;
      }
      if (counter === 0) {
        return i;
      }
    }
  }
  return -1;
};
console.log("(som(th)ng)".findParenMatch(7));
