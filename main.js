function calculateString(st){
  return (eval(st.replace(/[^0-9.+-/*-]/g,''))).toFixed(0)
}
console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c"))