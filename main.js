function vodkaConsumption(s){
    return s.map(e=>e.replace(/\d+/g,'')==='.l'?+e.replace(/[^\d.]/g,'')*1000:+e.replace(/\D/g,'')).reduce((a,c)=>a+c,0)+'ml'
}
console.log(vodkaConsumption([
    '7097ml', '7729ml',
    '11.76l', '7.08l',
    '1.85l',  '9.01l',
    '4136ml', '4638ml'
  ]))  
console.log(vodkaConsumption([
    '7470ml', '379ml',
    '2257ml', '15.67l',
    '6633ml', '12.9l',
    '3.46l'
  ]))  