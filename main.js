function rapNameGen(s){
  const o={'0':'ero','1':'ne','2':'wo','3':'hree','4':'our','5':'ive','6':'ix','7':'even','8':'ight','9':'ine'}
  const a=Math.round((+s[0]+ +s[1])/2),b=Math.round([...s.slice(6)].reduce((a,c)=>+a + +c)/2)
  return `${a+o[a]} ${b+o[b]}`
}

console.log(rapNameGen('01.01.01'))