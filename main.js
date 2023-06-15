function salePrice(s){
  return s.replace(/cost|\$\d+/g,e=>{
    if(e==='cost')return 'sale'
    e=+(+e.slice(1)+e.slice(1)/100*15)
    let t=Math.round(e)
    while(t%5)t++
    return '$'+t
  })
}

console.log(salePrice(`iPhone 7 cost price: $370
Samsung note 7 cost price: $670
iPad pro cost price: $770`))