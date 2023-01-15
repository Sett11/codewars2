function printerError(s) {
  return `${s.replace(/[^n-z]/gi,'').length}/${s.length}`
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))