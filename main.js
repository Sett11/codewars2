function fix(p){
  return p.split`.`.map((el,i)=>{
    if(el[0]!==' '){
      el = el.charAt(0).toUpperCase() + el.slice(1)
      return el
    }
    if(el[0]===' '){
      el = el.charAt(0) + el.charAt(1).toUpperCase() + el.slice(2)
      return el
    }
  }).join`.`
}
console.log(fix("hi. my name is inigo montoya. you killed my father. prepare to die."))