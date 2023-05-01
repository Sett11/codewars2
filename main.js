bangMinusN=(n,h)=>((h.split`\n`.reverse()[n-1]||'').split(/\d+(.*)/)[1]||'').trim``||`!-${n}: event not found`

console.log(bangMinusN(4,"   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me \n  6  chmod 000 me \n  7  more me\n  8  history"))