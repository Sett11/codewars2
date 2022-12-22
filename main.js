const solve = arr => arr.filter((el,i) => el > Math.max(...arr.slice(i+1)))

console.log(solve([16,17,14,3,14,5,2]));
