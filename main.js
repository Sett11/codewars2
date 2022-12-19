const deepCount = (a) =>  a.reduce((acc,curr) => Array.isArray(curr) ? acc += deepCount(curr) : acc, a.length)

console.log(deepCount([[[[[]], 2, 24]], 10, [[3, 10, [[]]]]]));
