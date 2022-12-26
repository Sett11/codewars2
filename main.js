const whatTimeIsIt = (a) => {
  if(a===0 || a === 360){
    return `12:00`
  }
    const sum = a * 2
    let hours = Math.floor(sum / 60)
    let min = Math.floor(sum - hours*60)
    const control = (''+min).split('').map(Number)
    const control2 = (''+hours).split('').map(Number)
    if(control.length == 1){
      control.unshift(0)
      min = control.join('')
    }
    if(control2.length == 1){
      control2.unshift(0)
      hours = control2.join('')
    }
    return `${hours == 00? 12: hours}:${String(min)}`
  }
console.log(whatTimeIsIt(82.72141264404617))