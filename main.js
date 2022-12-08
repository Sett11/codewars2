function boredom(staff){
 const val = Object.values(staff)
 let total = 0
 for( let i = 0; i < val.length; i++){
  if(val[i] === 'accounts'){
    total += 1
  }
  if(val[i] === 'finance'){
    total += 2
  }
  if(val[i] === 'canteen'){
    total += 10
  }
  if(val[i] === 'regulation'){
    total += 3
  }
  if(val[i] === 'trading'){
    total += 6
  }
  if(val[i] === 'change'){
    total += 6
  }
  if(val[i] === 'IS'){
    total += 8
  }
  if(val[i] === 'retail'){
    total += 5
  }
  if(val[i] === 'cleaning'){
    total += 4
  }
  if(val[i] === 'pissing about'){
    total += 25
  }
 }
 return total <= 80 ? 'kill me now': total > 80 && total< 100 ? 'i can handle this' : 'party time!!'
}
console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }))