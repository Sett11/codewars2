decrypt=s=>s.split` `.map(e=>String.fromCharCode((e.match(/\d/g).reduce((a,c)=>a+ +c,0)%27)+96)).join``.replace(/`/g,' ')

console.log(decrypt("2@I51Rk 6@95I4R8k B23A1W6BZ O231I!W6BZ 3k&4E7h1"))