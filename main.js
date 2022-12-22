function isNegativeZero(n) {
    return n === 0 && (1 / n) === -Infinity ? true : false
  }