function selfDescriptive(m,n=[...m+'']) {
    return Object.values(n.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).join``===n.join``.replace(/0/g,'')
}

  console.log(selfDescriptive(21200))
  console.log(selfDescriptive(42101000))
  console.log(selfDescriptive(21230))