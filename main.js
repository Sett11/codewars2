convertCF=(n,s='c')=>{
  if(s!=='c'&&s!=='f')throw Error()
  return s==='f'?(n*9/5)+32:(n-32)/9*5
}

console.log(convertCF(32,'c'))