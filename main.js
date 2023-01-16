function explode(x){
  if(typeof x[0]==='number'&&typeof x[1]==='number')return Array(x[0]+x[1]).fill(x)
  if(typeof x[0]==='number'&&typeof x[1]!=='number')return Array(x[0]).fill(x)
  if(typeof x[1]==='number'&&typeof x[0]!=='number')return Array(x[1]).fill(x)
  if(typeof x[0]!=='number'&&typeof x[1]!=='number')return 'Void!'
}
console.log(explode(['a', 0]))