function decipherThis(str) {
  const first = str.split(" ");
  return first
    .map((el) => {
      if (el.replace(/\D/gi, "") == Number(el)) {
        el = String.fromCharCode(el);
        return el;
      }
      if (el.length === 2) {
        const ns = String.fromCharCode(el.replace(/\D/gi, ""));
        const nns = el[1];
        return ns + nns;
      }
      if (el.replace(/\d/g, "").length === 1) {
        return (
          String.fromCharCode(el.replace(/\D/gi, "")) + el.replace(/\d/g, "")
        );
      }
      const newStr = String.fromCharCode(el.replace(/\D/gi, ""));
      let elem = el.replace(/\d/g, "");
      const nextNewStr = elem.charAt(0);
      const slicEl = elem.slice(1, elem.length - 1);
      const last = elem.slice(elem.length - 1);
      return newStr + last + slicEl + nextNewStr;
    })
    .join(" ");
}
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
//'Have a go at this and see how you do'
