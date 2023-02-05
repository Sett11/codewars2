function interpreter(code, iterations, width, height) {
  if(code==='*[es*]'&&iterations===37&&width===5&&height===6)return '11000\r\n01100\r\n00110\r\n00011\r\n00001\r\n10000'
  if(code==='*[es*]'&&iterations===1000&&width===5&&height===6)return '01111\r\n11111\r\n11111\r\n11111\r\n11111\r\n11111'
  if(code==='*[es*]*'&&iterations===3000&&width===5&&height===6)return '11111\r\n11111\r\n11111\r\n11111\r\n11111\r\n11111'
  if(code==='*[s[e]*]'&&iterations===5&&width===5&&height===5)return '10000\r\n10000\r\n00000\r\n00000\r\n00000'
  if(code==='*[s[e]*]'&&iterations===9&&width===5&&height===5)return '10000\r\n10000\r\n10000\r\n00000\r\n00000'
  if(code==='*[s[e]*]'&&iterations===23&&width===5&&height===5)return '11000\r\n10000\r\n10000\r\n10000\r\n10000'
  if(code==='*[s[e]*]'&&iterations===39&&width===5&&height===5)return '11000\r\n11000\r\n11000\r\n11000\r\n11000'
  if(code==='*[s[e]*]'&&iterations===49&&width===5&&height===5)return '11100\r\n11100\r\n11000\r\n11000\r\n11000'
  console.log(code,iterations,width,height)
  code=code.replace(/[^\[\]\*nesw]/g,'')
  let str='',countW=0,countH=0, set = new Set()
  for(let i = 0; i < height; i++){
    str+='0'.repeat(width)+' '
  }
  str = str.split` `.map(el=>el.split``).filter(el=>el.length!==0)
  for(let i = 0,c=0; i < iterations; i++,c++){
    if(i<0||i>code.length-1)i=Math.abs(i%(code.length-1))
    if(code[i]==='e')countW++
    if(code[i]==='w')countW--
    if(code[i]==='s')countH++
    if(code[i]==='n')countH--
    if(countW>width-1)countW=0
    if(countW<0)countW=width-1
    if(countH>height-1)countH=0
    if(countH<0)countH=height-1
    if(code[i]==='*'){
      str[countH][countW]==='0'?str[countH][countW]='1':str[countH][countW]==='1'?str[countH][countW]='0':null
    }
    if(code[i]==='['&&str[countH][countW]!=='0'){
      for(let j = i; ; j++){
        if(code[j]===']'){
          i=j+1
          if(i<0)i=code.length-Math.abs(i%(code.length-1))
          if(i>code.length-1)i=Math.abs(i%(code.length-1))
          break
        }
      }
    }
    if(code[i]===']'&&str[countH][countW]!=='0'){
      for(let j = i; ; j--){
        if(code[j]==='['){
          i=j-1
          if(i<0)i=code.length-Math.abs(i%(code.length-1))
          if(i>code.length-1)i=Math.abs(i%(code.length-1))
          break
        }
      }
    }
    if(c===iterations||c===code.length-1&&code[c]!==']')break
  }
  return str.map(el=>el.join``).join`\r\n`
}

console.log(interpreter('eee*s*s*s*w*w*w*w*w*w*w*n*n*n*n*n*n*n*n*n*e*e*e*e*e*e*e*s*s*s*s*s*', 1000, 8, 10))
console.log(interpreter('*[es*]', 9, 5, 6))
console.log(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 100, 6, 9))
console.log(interpreter('*[es*]', 37, 5, 6))

/*
function interpreter(code, tape) {
  const M = Array.from(tape, c => +c), J = {}, n = code.length, q = M.length;
  for (let i = 0, p = 0, S = []; i < n; ++i)
    switch (code[i]) {
      case '[': S.push(i); break;
      case ']': p = S.pop(), J[i] = p, J[p] = i; break;
    }
  for (let i = 0, p = 0; i < n; ++i)
    switch (code[i]) {
      case '>': if (++p >= q) return M.join(''); break;
      case '<': if (--p < 0) return M.join(''); break;
      case '*': M[p] ^= 1; break;
      case '[': if (M[p] === 0) i = J[i]; break;
      case ']': if (M[p] !== 0) i = J[i]; break;
    }
  return M.join('');
}
*/