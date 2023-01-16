function isItANum(str) {
  const res = str.replace(/[^0-9]/g,'')
  return res.length === 11 && res[0] === '0' ? res : "Not a phone number"
}
  console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"))