function ensureEven(n) {
    if(!(n&1)&&Number.isInteger(n))return n
    if(!Math.floor(n)||!Math.ceil(n))return 0
    let a=Array(100).fill(1).map((e,i)=>[e+i,-(e+i)]).find(e=>e[0]%2==0&&(e[0]>n||e[1]>n)).filter(e=>e>n||e<n)
    return n>0?a.filter(e=>e>0)[0]:a.filter(e=>e<0)[0]
}

console.log(ensureEven(1.346))
console.log(ensureEven(-1))
console.log(ensureEven(.5))
console.log(ensureEven(18264952))