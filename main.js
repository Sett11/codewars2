function replaceAll(i, f, r) {
  if(f.match(/\/|\^|\&/))return i.replace(f, r)
  return i.replace(new RegExp(`${f}`,'g'), r)
}
console.log(replaceAll('123\^$.|?*+()[]{}', '\^$.|?*+()[]{}', '-'))