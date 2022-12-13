const sumOfIntegersInString = (s) => s.replace(/\D/g, '-').split('-').filter(el => el !== '').map(Number).reduce((acc, curr) => acc+curr,0)

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))