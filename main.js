function uncollapse(digits){
  return digits.replace(/zero/g, '$& ').replace(/one/g,'$& ').replace(/two/g,'$& ')
  .replace(/three/g,'$& ').replace(/four/g,'$& ').replace(/five/g,'$& ').replace(/six/g,'$& ')
  .replace(/seven/g,'$& ').replace(/eight/g,'$& ').replace(/nine/g,'$& ').replace(/\s$/,'')
}
console.log(uncollapse("zeronineoneoneeighttwoseventhreesixfourtwofive"))