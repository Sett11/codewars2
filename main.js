testIt=(a,b)=>[...a+''].reduce((a,c)=>a+ +c,0)*[...b+''].reduce((a,c)=>a+ +c,0)

console.log(testIt(123,45))
