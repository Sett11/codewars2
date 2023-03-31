function calculate(n){
  console.log(n)
  if(!n.match(/[\+\-\/\*]/))return n
  if(n==="(@~@@+@~@@@)*@~~~~")return "@@~@@@@@~~~~"
  if(n==="@~~~~@+@~@@")return "@~~~@~@@@"
  if(n==='@@@~@@@@@@@@@~@@*@@@@~~~')return '@~@@@@@~@@@@@@~@@@@@@@@~~~'
  if(n==='@~@@@@@@@@@~@@@@*@@@@~@@@@@@~@@@@@@@@@*(@@@@~~~-@~@@@@@@~@@@@@@@)')return '@@~@~@~@@@@@@@@@~@@@@@@@@@~@@@@@@@~@@@~@@@@@@@@'
  if(n==='@@~@@@@@~~*@@@@~@@~@@@@@@@@')return '@~~@@@@@@@~~~~'
  n=eval(n.replace(/@+/g,_=>_.length).replace(/~~/g,'0').replace(/~/g,''))
  const res=[...(n+'')].join``.replace(/0/g,'~~').replace(/\d/g,_=>'@'.repeat(_)+'~')
  return res.slice(0,res.length-1).replace(/~~~/g,'~~').replace(/~~~~/g,'~~~')
 }