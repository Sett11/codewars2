var encryptThis = function (text) {
  const first = text.split(" ");
  return first.map((el) => {
    if(el.length === 2){
        const nt = el.charCodeAt(0)
        const nnt = el.slice(1)
        return nt + nnt
    }
    const newText = el.charCodeAt(0)
    const nextNewText = el.slice(1);
    let lastNewText = nextNewText.slice(1, nextNewText.length - 1)
    const firstS = nextNewText.charAt(0)
    const lastS = nextNewText.charAt(nextNewText.length - 1)
    return newText + lastS + lastNewText + firstS
  }).join(' ')
};
console.log(encryptThis("The less he spoke the more he heard"));
