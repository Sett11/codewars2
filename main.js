bangStartString=(s,h)=>h.split`\n`.reverse().map(e=>e.split(/\d+(.*)/)[1].trim()).filter(e=>e.match(RegExp(`^${s}`)))[0]||`!${s}: event not found`

console.log(bangStartString('me',"   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me\n  6  chmod 000 me\n  7  more me\n  8  history"))