const wordToBin = str => str.split``.map(el => '0' + (el.charCodeAt()).toString(2))

console.log(wordToBin('AB'))