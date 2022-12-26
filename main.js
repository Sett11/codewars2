function replaceAll(seq, find, replace) {
  if(typeof seq === 'string'){
    seq = seq.split('')
    return seq.map((el) => (el === find ? (el = replace) : (el = el))).join('')
  }
  return seq.map((el) => (el === find ? (el = replace) : (el = el)));
}
console.log(replaceAll([1, 2, 2], 1, 2));
