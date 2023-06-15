function cardsAndPero(s,a=s.match(/.{3,3}/g),c='PKHT'){
  if(a.length>[...new Set(a)].length)return [-1,-1,-1,-1]
  a=a.map(e=>e[0]).reduce((a,c)=>(a[c]=a[c]+1||1,a),{})
  for(let i=-1;++i<c.length;)if(!a[c[i]])a[c[i]]=0
  return [13-a['P'],13-a['K'],13-a['H'],13-a['T']]
}

console.log(cardsAndPero('P05P01P02P03P13P09P11P07K01P12K03K02K13K12K10K08H03H02H13H12H10H08T01T03T02T13T12T10T08P04K07H02T07H06T11K11T05K05H05H11'))
console.log(cardsAndPero('P01K02P03P11K09K10P13P10'))
console.log(cardsAndPero('P10K10H10T01'))
console.log(cardsAndPero('P04H13T04K10H02K02K12H07H11H03T13T11T01K13'))