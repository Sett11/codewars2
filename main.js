function switcheroo(x){
  return x.split('').map(el=> el==='a'?el='b':el==='b'?el='a':el).join('')
}
console.log(switcheroo('abc'))