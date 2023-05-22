biggestNum=(a,b,r=[a,b].map(e=>BigInt(e.replace(/^\-+/g,e=>e.length%2===0?'+':'-'))),q=r[0]>r[1]?r[0]:r[1])=>q+''

console.log(biggestNum('0222','----0003333'))