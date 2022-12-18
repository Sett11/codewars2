function countLettersAndDigits(input) {
  return input.length - input.replace(/[A-Za-z0-9]/g, '').length
}
console.log(countLettersAndDigits("aBcDeFg090"))