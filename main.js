const removeParentheses=(s,r=/\([^\(\)]*\)/g)=>!s.match(r)?s:removeParentheses(s=s.replace(r,''),r)

console.log(removeParentheses("example(unwanted thing)example"))
console.log(removeParentheses("(first group) (second group) (third group)"))
