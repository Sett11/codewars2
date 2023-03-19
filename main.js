function hammingWeight(x){
  function toBIN( num ) {
    let out = "", bit = 1;
    while( num >= bit ) {
        out = ( num & bit ? 1 : 0 ) + out;
        bit <<= 1;
    }
    return out || "0";
}
x=toBIN(x)
  return [...(x).toString(2)].filter(e=>e==='1').length
}

console.log(hammingWeight(10))