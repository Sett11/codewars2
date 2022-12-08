function removeRotten(bagOfFruits){
  if(bagOfFruits === undefined || bagOfFruits === null || bagOfFruits.length === 0 || bagOfFruits.join('') === ' '){
    return []
  }
  return bagOfFruits.map((el) => el.replace(/rotten/, '').toLowerCase())
}
console.log(removeRotten([]))