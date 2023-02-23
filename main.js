function numberAndIPaddress(s){
  if(s.includes('.')){
    s=s.split`.`.map(e=>(+e).toString(2))
    .map(e=>{
      if(e.length<8)e='0'.repeat(8-e.length)+e
      return e
  }).join``
    return parseInt(s,2)+''
  }
  s=(+s).toString(2),arr=[]
  if(s.length<32)s='0'.repeat(32-s.length)+s
  for(let i=0;i<s.length;i+=8){arr.push(s.slice(i,i+8))}
  return arr.map(e=>parseInt(+e,2)).join`.`
}
console.log(numberAndIPaddress("10.0.3.193"))
console.log(numberAndIPaddress("167969729"))