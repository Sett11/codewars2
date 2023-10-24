function whySoSerious(s) {
    return [...new Set((s.match(/Jc|7s|5s|As|9c/g)||[]))].sort().join``==='5s7s9cAsJc'
  }

console.log(whySoSerious("4cc90cc5Ac1As13c5c23J47s1Jc9cs0Jcc5sss7ccs0"))