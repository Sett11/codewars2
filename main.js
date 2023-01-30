function changeCase(w, t){
  console.log(w)
  if(w==='')return ''
  if(t!=='kebab'&&t!=='camel'&&t!=='snake'||w.match(/-/g)&&w.match(/_/g))return undefined
  if(w.match(/[A-Z]/g)&&w.match(/_/g)||w.match(/[A-Z]/g)&&w.match(/-/g))return undefined
  if(t=='kebab'){
    w = w.replace(/-|_/g, ' ').replace(/[A-Z]/g,' $&').split` `
    return w.map(el=>el.toLowerCase()).join`-`
  }
  if(t=='snake'){
    w = w.replace(/-|_/g, ' ').replace(/[A-Z]/g,' $&').split` `
    return w.map(el=>el.toLowerCase()).join`_`
  }
  if(t=='camel'){
    w = w.replace(/-|_/g, ' ').replace(/[A-Z]/g,' $&').split` `
    return w.shift() + w.map(el=>el.charAt(0).toUpperCase() + el.slice(1)).join``
  }
}
console.log(changeCase("map_to_all", "camel"))
console.log(changeCase("snakeCamel_case", "snake"))