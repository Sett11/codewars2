isSquare=a=>!a.length?undefined:a.flat(100).every(e=>Number.isInteger(Math.sqrt(e)))

console.log(isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]]))