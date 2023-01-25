const abc1 = "dpwuqoxmeykzcvihljntrsgfab";
const abc2 = "ckxlvzerqgfidspbyohmtajwun";

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return str.split``.map(el=> abc1.includes(el) ? abc1.indexOf(el) : el)
    .map(el=> typeof el === 'number'? abc2[el] : el).join``
  }
  this.decode = function (str) {
    return str.split``.map(el=> abc2.includes(el)? abc2.indexOf(el) : el)
    .map(el=> typeof el === 'number'? abc1[el] : el).join``
  }
}
const r = new SubstitutionCipher(abc1,abc2)

console.log(r.encode("b9bv"))