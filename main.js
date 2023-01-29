sc=(a,b,c)=>{
[a,b,c] = [a,b,c].sort((a,b)=>a-b)
return a+b==c?`${a}+${b}=${c}`:a*b==c?`${a}*${b}=${c}`:''
}
console.log(sc(1,2,3))