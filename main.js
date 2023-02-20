const cutCancerCells=o=>{
  o=[...o],o.push('&'),o.unshift('&')
  for(let i=1;i<o.length-1;i++){
    if(o[i]==='c')o[i]='&'
    if(o[i]==='C'&&o[i-1]!==o[i-1].toUpperCase()&&o[i+1]!==o[i+1].toUpperCase())o[i-1]='&',o[i]='&',o[i+1]='&'
    if(o[i]==='C'&&o[i-1]===o[i-1].toUpperCase()&&o[i+1]!==o[i+1].toUpperCase())o[i]='&',o[i+1]='&'
    if(o[i]==='C'&&o[i-1]!==o[i-1].toUpperCase()&&o[i+1]===o[i+1].toUpperCase())o[i-1]='&',o[i]='&'
  }return o.filter(e=>e!=='&').join``.replace(/C/g,'')
}

console.log(cutCancerCells('CAAC'))
console.log(cutCancerCells('BCE'))
console.log(cutCancerCells('acCb'))
console.log(cutCancerCells('acb'))
console.log(cutCancerCells('NcE'))
console.log(cutCancerCells('HuccccCCmPHYccCcCCSMhClCCX'))