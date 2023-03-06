kaCokadekaMe=(w,s='ka'+w.replace(/[aioue]+/gi,e=>e+'ka'))=>w[w.length-1].match(/[aioue]/gi)?s.slice(0,s.length-2):s

console.log(kaCokadekaMe('maintenance'))