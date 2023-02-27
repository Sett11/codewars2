const reverseParentheses=(s,r=/\(([a-zA-Z]+)\)/g,v=/\(.+\)/g)=>{
  if(!s.match(r)&&!s.match(v))return s
  if(s.match(r))return reverseParentheses(s=s.replace(r,e=>[...e].reverse().join``.replace(/\(|\)/g,'')),r,v)
  if(!s.match(r))return reverseParentheses(s=s.replace(v,e=>[...e].reverse().join``.replace(/\(|\)/g,'')),r,v)
}

console.log(reverseParentheses("Code(Cha(lle)nge)"))
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"))
console.log(reverseParentheses("f(niT((xjH)iQSk)QuMD)Hfu"))
console.log(reverseParentheses("Ivjo(sGw((IDCZ(GWmlBVaUkI)y)(AkwFLq(qNmKmzF)uqd)wrw)cK)qI"))