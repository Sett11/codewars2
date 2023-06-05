function ROT135(s,f=(x,y)=>y?x.toUpperCase():x){
  return [...s].map(e=>!parseInt(e,36)&&e!=='0'?e:+e===+e?(+e+5)%10:f(String.fromCharCode((((parseInt(e.toLowerCase(),36))+3)%26)+97),e>{}?0:1)).join``
}

console.log(ROT135(';The quick brown fox jumps over the 2 lazy dogs'))
console.log(ROT135('Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf'))