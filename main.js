function vaporcode(string) {
  return string.toUpperCase().split('').filter(el => el !== ' ').join('  ')
}
console.log(vaporcode("Lets go to the movies" ))