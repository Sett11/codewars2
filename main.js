sumEvenNumbers=a=>a.reduce((a,c)=>a+=c%2===0&&Number.isInteger(c)?c:0,0)


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))