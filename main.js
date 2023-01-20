function zeroPlentiful(ar){
    const res = ar.map(el=>{
        let str = String(el).split``
        if(str[str.length-1]==='0'&&el!==0){
            el = '&'
        }
        return el
    }).join``.replace(/0+/g,' $& ').replace(/[^0\s]/g,'').split` `.filter(el=>el!=='')
    return res.every(el=>el.length>=4) ? res.length : 0
}
  console.log(zeroPlentiful([0, 0, 0, 0, 0, 0]))