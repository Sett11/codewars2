function decipherThis(str) {
  const first = str.split(' ')
  return first.map((el) => {
    if(el.length === 2){
      const ns = String.fromCharCode(el[0])
      const nns = el.slice(1)
      return ns + nns
    }
    const newStr = String.fromCharCode(el[0])
    const nextNewStr = el.slice(1)
    let lastNewStr = nextNewStr.slice(1, nextNewStr.length - 1)
    const first = nextNewStr.charAt(0)
    const last = nextNewStr.charAt(nextNewStr.length - 1)
    return newStr + last + lastNewStr + first
  }).join(' ')
  }; 
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
