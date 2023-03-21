function snakesOn(a) {
    return [...new Set(a.map(e=>e.join``).join``)].filter(e=>e!=='_').length
}

  console.log(snakesOn([  
    '__AAAAA__A'.split(''),
    '__A___A__A'.split(''),
    'K_____AAAA'.split(''),
    'K_DDDD____'.split(''),
    'K____DDDD_'.split('')
  ]))