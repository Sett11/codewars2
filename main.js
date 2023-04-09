function longer(s) {
    return s.split` `.map(e=>e[0]===e[0].toUpperCase()?[e,1,e.length]:[e,0,e.length]).sort((a,b)=>a[2]-b[2]||b[1]-a[1]||a[0].localeCompare(b[0])).map(e=>e[0]).join` `
}

  console.log(longer("hello Hello"))