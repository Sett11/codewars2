function sc(s){
  const a=s.split`` 
  return a.filter(e=>s.includes(e==e.toLowerCase()?e.toUpperCase():e.toLowerCase())).join``
}

console.log(sc('AaaaAaab'))