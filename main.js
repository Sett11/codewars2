greatestCommonFactor=(a,c=Math.min(...a))=>a.every(e=>e%c===0)?c:greatestCommonFactor(a,c-1)

console.log(greatestCommonFactor([46, 14, 20, 88]))