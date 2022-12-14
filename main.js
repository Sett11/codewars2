const calculate = (str) => eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString()
  
  console.log(calculate("1minus2minus3minus4"))