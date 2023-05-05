const a='zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA'
function encode(s){
  return [...s].map(e=>a.includes(e)?(a.indexOf(e)+1).toString(2).replace(/\d/g,e=>+e?'0':'1')+2:e).join``
}
function decode(s){
  return s.split` `.map(e=>e.split`2`.filter(c=>c).map(u=>u.replace(/\d+/g,z=>z[0].match(/\d/)?a[parseInt(z.replace(/\d/g,x=>+x?0:1),2)-1]:z)).join``).join` `
}

console.log(encode('JXZONB|vY wzX%CLtC* Wxd  HxMAXkHRhy _f_ue!vp* cp r-^ pSxz!'))
console.log(encode('e,p_F+O WsS _WnzD}(*!EI^o NgMrsVwku( wx_xWA Y(n XmFAL&.'))
console.log(decode('0100102010012000020000200112 0112001120110200002010002!'))
console.log(decode('010012,01002_0100002+0110012 000012011120111012 _00001200102020011102}(*!00111120100112^00112 01100020101120101112011020111200000201120111120012( 0112002_0020000120010112 000112(00102 00010200012010000200101120101102&.'))