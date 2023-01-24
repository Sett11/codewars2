function expandedForm(num) {
  num = (num+'').split`.`
  const arr1 = [num[0]][0].split``, len1 = arr1.length, arr2 = [num[1]][0].split``, len2 = arr2.length
  let str = ''
  for(let i = 0; i < len1; i++){
    let tmp = arr1[i]
    if(tmp === '0'){
      continue
    }
    str += `${tmp}${'0'.repeat(len1-i-1)} + `
  }
  for(let i = 0; i < len2; i++){
    let tmp = arr2[i], counter = '1'
    if(tmp==='0'){
      continue
    }
    str += `${tmp}/${counter}${'0'.repeat(i+1)} + `
  }
  return str.slice(0,str.length-2).trim()
}
console.log(expandedForm(7.304))