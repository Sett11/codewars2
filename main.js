ride=(a,b,f=x=>[...x].map(e=>parseInt(e,36)-9).reduce((a,c)=>a*c,1)%47)=>f(a)===f(b)?'GO':'STAY'

console.log(ride("COMETQ","HVNGAT"))