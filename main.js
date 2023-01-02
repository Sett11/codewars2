function changer(str) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  str = str.split``
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ' || str[i] === '0' || str[i] === '1' || str[i] === '2' || str[i] === '3' || str[i] === '4' || str[i] === '5' || str[i] === '6' || str[i] === '7' || str[i] === '8' || str[i] === '9'){
      continue
    }
      str[i] = (parseInt(str[i], 36) - 9)
  }
  return str
  .map(el => {
    if(el === ' ' || el === '0' || el === '1' || el === '2' || el === '3' || el === '4' || el === '5' || el === '6' || el === '7' || el === '8' || el === '9'){
      return el
    } else{

    }
    el = arr[el]
    if(el === 'a' || el === 'u' || el ==='o' || el === 'i' || el === 'e'){
      return el.toUpperCase()
    }
    else{
      return el.toLowerCase()
    }
  }).join``
}

console.log(changer('ZZ'))