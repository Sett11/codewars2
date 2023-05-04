function send(s){
  return [...s].map(e=>((e).charCodeAt()).toString(2)).map(e=>'0'.repeat(7-e.length)+e).join``.match(/0+|1+\1*/g).map(e=>+e[0]?'0 '+'0'.repeat(e.length):'00 '+'0'.repeat(e.length)).join` `
}
function receive(s,a=s.split` `,r=[]){
  for(let i=0;i<a.length;i+=2)a[i]=='0'?r.push('1'.repeat(a[i+1].length)):r.push('0'.repeat(a[i+1].length))
  return r.join``.match(/.{7,7}/g).map(e=>String.fromCharCode(parseInt(e,2))).join``
}

console.log(receive("0 0 00 0000 0 000 00 0000 0 00"))
console.log(send("%"))