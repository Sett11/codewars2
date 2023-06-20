const translate=s=>{
  return s.length<2?s:!s[0].match(/a|u|o|e|i/)?s.slice(1)+s[0]+'ay':s+'ay'
}

console.log(translate('billy'))