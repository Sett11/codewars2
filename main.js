function gap(n) {
    return Math.max(...(n).toString(2).match(/1.+1/g).join``.replace(/1/g, ' ').split` `.map(el => el.length))
}
console.log(gap(529))