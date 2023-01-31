function uncompress(m) {
  return m.split`,`
  .map(el=>{
    if(el.includes('*')&&el.includes('-')){
      el = el.split`*`, str = ''
      for(let i = 0; i < Number(el[1]); i++){
        str += `${el[0]}, `
      }
      return str.split`,`.map(el=>el.trim()).filter(el=>el!=='').map(Number)
    }
    if(el.includes('-')&&!el.includes('/')){
      el = el.split`-`.map(Number)
      let innerArr = []
      if(el[0]<el[1]){
        for(let i = el[0]; i <= el[1]; i++){
          innerArr.push((i))
        }
        return innerArr
      }
      if(el[0]>el[1]){
        for(let i = el[1]; i <= el[0]; i++){
          innerArr.push((i))
        }
        return innerArr.reverse()
      }
      if(el[0===el[1]]){
        return [el[0], el[1]]
      }
    }
    if(el.includes('-')&&el.includes('/')){
      let one = Number(el.match(/^\d+/g)), two = Number(String(el.match(/-\d+\//g)).replace(/[^\d]/g,'')), three = Number(el.match(/\d+$/)), innerArr = []
      if(el.replace(/[^-]/g, '').length >1){
        two = -two
      }
      if(one<two){
        for(let i = one; i <= two; i+=three){
          innerArr.push(i)
        }
        return innerArr
      }
      if(one>two){
        for(let i = two; i <= one; i+=three){
          innerArr.push(i)
        }
        return innerArr.reverse()
      }
  }
    if(el.includes('*')){
      el = el.split`*`, str = ''
      for(let i = 0; i < Number(el[1]); i++){
        str += `${el[0]}, `
      }
      return str.split`,`.map(el=>el.trim()).filter(el=>el!=='').map(Number)
    }
    return Number(el)
  }).flat()
}
console.log(uncompress("-2*2"))