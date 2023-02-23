function isMAC48Address(s) {
  return s.split`-`.map(e=>parseInt(e,16)).every(e=>e===e)&&s.split`-`.length===6&&!s.replace(/[A-F-0-9]/g,'').length
}
console.log(isMAC48Address("Z1-1B-63-84-45-E6"))
console.log(isMAC48Address("00-1B-63-84-45-E6"))
console.log(isMAC48Address("8C-DB-FQ-9A-1C-FB" ))