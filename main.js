const uniqueDigitProducts=a=>[...new Set(a.map(e=>[...(e+'')].map(Number).reduce((a,c)=>a*c)))].length

console.log(uniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488]))