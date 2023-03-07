function maxConsecZeros(n,r=0){
  n=(+n).toString(2).replace(/0+/g,e=>r=Math.max(r,e.length))
  return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen','Twenty'][r]
}

console.log(maxConsecZeros('8192'))