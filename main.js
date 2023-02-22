const whoIsTheHero=n=>{
  let check=Object.values(n).reduce((a,c)=>a*c),arr=[],c=1
  while(c<Math.sqrt(check)+1){
    if(check%c===0&&!arr.includes(c)&&!arr.includes(check/c)){arr.push(c,check/c)};c++};arr=[...new Set(arr)]
  return `Good-Bye, Hero ${Object.keys(n)[+[...(arr.length+'')].reverse()[0]]}! We'll take care of your children and your wife.`
}

console.log(whoIsTheHero({Voile:1,John:2,Jerry:3,Mike:4,Abc:5,Def:6,Ghi:7,Jkl:8,Mno:9,Tom:10}))
console.log(whoIsTheHero({John:1,Tom:2,Jerry:6,Mike:1,Abc:3,Def:1,Ghi:1,Jkl:1,Mno:1,Voile:1}))
console.log(whoIsTheHero({John:1,Voile:1,Jerry:1,Mike:1,Abc:1,Def:1,Ghi:1,Jkl:1,Mno:1,Tom:1}))