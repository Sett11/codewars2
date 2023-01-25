const abc = 'abcdefghijklmnopqrstuvwxyz'

function AtbashCipher(abc) {
  this.encode = function (str) {
    return str.split``.map(el=>abc.includes(el)?abc.indexOf(el):el).map(el=> typeof el !== 'number' ? el : abc.split``.reverse().join``[el]).join``
  };
  this.decode = function (str) {
    return this.encode(str)
  };
}

const z = new AtbashCipher(abc)
console.log(z.decode('zyx'))