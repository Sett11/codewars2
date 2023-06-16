function fromWhere(y,m,q,s=''){
  if(q==="Where are you from?"){
    for(let i in y)if(y[i]!==m[i])return `I am from ${m[i]}.`
    return 'Same as you.'
  }
  for(let i in y)if(q.match(i.toLocaleLowerCase()))s+=i
  if(!s)return 'What are you saying?'
  return m[s]===y[s]?'Same as you.':`I am from ${m[s]}.`
}

console.log(fromWhere({Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"},
{Country:"AA", Province:"BB", City:"XX", Town:"YY", Street:"ZZ"},"What street are you from?"))