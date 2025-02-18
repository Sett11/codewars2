function testIt(a){
  const f=x=>x.reduce((a,c)=>{
    a[c]=(a[c]+1)||1
    return a
  },{}),b=a.filter(e=>e!=='?').map(e=>e.split` `)
  let [x,y]=[Object.entries(f(b.map(e=>e[0]))),Object.entries(f(b.map(e=>e[1])))]
  let m1=Math.min(...x.map(e=>e[1])),m2=Math.min(...y.map(e=>e[1]))
  return `${x.filter(e=>e[1]==m1).map(e=>e[0])[0]} ${y.filter(e=>e[1]==m2).map(e=>e[0])[0]}`
}

console.log(testIt(["Red Square","Red Circle","Green Triangle","Green Circle","?","Green Square"]))
console.log(testIt(["Red Square","Red Circle","Green Triangle","Green Circle","Blue Circle","?","Blue Triangle","Blue Square","Green Square"]))