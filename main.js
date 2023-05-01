bangBang=(s,r=s.split('\n').reverse().map(e=>e.trim()))=>r[0].slice(r[0].indexOf(' ')).trim()


console.log(bangBang("   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me"))