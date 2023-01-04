function onesComplement(n) {
  return n.toString(2).split``.map(el => el === '0' ? el = '1' : el = '0').join``
};