function shorter_reverse_longer(a,b){
  if(a.length >= b.length){
    return b + a.split('').reverse().join('') + b
  } else{
   return a + b.split('').reverse().join('') + a
  }
}
console.log(shorter_reverse_longer("fghi", "abcde"))