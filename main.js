function reverse(str){
  return str.trim().split(' ').map((el,i) => {
    if(i % 2 !== 0){
      return el.split('').reverse().join('')
    } else{
      return el
    }
  }).join(' ')
}
console.log(reverse("Reverse this string, please!"))