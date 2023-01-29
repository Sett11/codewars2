var compress = function (str) {
  console.log(str)
  if([...new Set(str)].length===str.length)return str
  str = '&' + str + '&'
  const arr = [], res = []
  let newStr = ''
  for(let i = 0; i < str.length; i++){
    if(str[i]!==str[i+1]){
      arr.push(i)
    }
  }
  for(let i = 0; i < arr.length; i++){
    res.push(str.slice(arr[i]+1, arr[i+1]+1))
  }
  const Fack = res.filter(el=>el!==''&&el!=='&').map(el=>[el.length, el[0]])
  for(let i = 0; i < Fack.length; i++){
    newStr += '[' + Fack[i] + ']' + ','
  }
  newStr = newStr.replace(/,$/,'')
  const finRes = `[${newStr}]`.replace(/[a-zA-Z]/g,`"$&"`)
  .replace(/\s/g, '" "').replace(/,\d/g, '"$&"')
  .replace(/",/g,',"').replace(/,,/g, ',","')
  .replace(/\./g,'"."')
  str = str.replace(/&$/,'').replace(/^&/,'')
  return finRes.length < str.length ? finRes:str
}

var decompress = function (c) {
  if(!c.match(/\[/))return c
  c = c.split`[`.filter(el=>el!=='').map(el=>el.replace(/\"/g,'').replace(/\]/g,'').replace(/,$/,''))
  .map(el=>el.split`,`).map(el=>{
    el[0] = Number(el[0])
    return el
  }).map(el=>{
    if(el.length===3){
      el[1] = ','
    }
    return el
  })
  let str = ''
  for(let i = 0; i < c.length; i++){
    str+=c[i][1].repeat(c[i][0])
  }
  return str
}

console.log(decompress('[[6,"4"],[22,"p"],[7,"7"],[9,"o"],[10,"y"],[13,","],[8,"8"],[12,"5"],[3,"8"],[8,"h"],[15,"j"],[9,"n"],[3,"7"],[15,"q"],[14,"p"],[11,"o"],[9,"p"],[3,"c"],[3,"2"],[12,"s"],[7,"8"],[7,"a"],[2,"q"],[2,"1"],[17,"o"],[10,"h"],[3,"y"],[12,"c"],[9,"b"],[6,"9"],[13,"u"],[6,"8"],[2,"3"],[15,","],[8,"o"],[12,"q"],[12,"a"],[11,"0"],[5,","],[9,"c"],[6,"u"],[7,"h"],[7,"d"],[9,"m"],[1,"t"],[4,"p"],[9,"3"]]'))