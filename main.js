function toCamelCase(str){
  str = str.replace(/-|_/g, ' ').split` `
  return str.shift() + str.map(el=>el.charAt(0).toUpperCase() + el.slice(1)).join``
}
console.log(toCamelCase("The_Stealth_Warrior"))