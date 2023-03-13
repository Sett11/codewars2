function parityBit(b) {
    return b.split` `.map(e=>e.charAt(e.length-1)==='1'&&e.slice(0,e.length-1).replace(/0/g,'').length%2!==0||e.charAt(e.length-1)==='0'&&e.slice(0,e.length-1).replace(/0/g,'').length%2===0?e.slice(0,e.length-1):'error').join` `
}

console.log(parityBit("01011001 01101110 01100000 01010110 10001111 01100011"))