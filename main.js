function decode(n){
    return n.replace(/98/g,',').split`,`.filter(e=>e).map((e,i)=>e.match(/[2-9]/g)?e.match(/\d{3}/g).map(u=>+u).map(z=>String.fromCharCode(z-4)).join``:i%2===0?String.fromCharCode(+e-4):parseInt(e,2)).filter(e=>e).join`, `
  }

console.log(decode('126101123105981000011100001011981211221161011131261111211201251201109810000009811198111'))