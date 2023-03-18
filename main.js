function calculate1RM(w,r) {
    return r===0?0:r===1?w:Math.max(...[Math.round(w*(1+r/30)),Math.round(w*r**0.1),Math.round((100*w)/(101.3-(2.67123*r)))])
}

console.log(calculate1RM(135,20))