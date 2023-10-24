function valAndUnits(s) {
    return {val:+s.replace(/[^-\d.]/g,''),units:s.replace(/[-\d.\s]/g,'')}
}

console.log(valAndUnits('-12.6px'))