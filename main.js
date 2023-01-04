function iTri(s){
  if(s === 0) return 'Starting Line... Good Luck!'
  if(s <= 2.40){
    return {'Swim':`${(140.60 - s).toFixed(2)} to go!`}
  }
  if(s > 2.40 && s <= 114.40){
    return {'Bike':`${(140.60 - s).toFixed(2)} to go!`}
  }
  if(s > 114.40 && s < 130.60){
    return {'Run':`${(140.60 - s).toFixed(2)} to go!`}
  }
  if(s > 130.60 && s < 140.60){
    return {'Run':'Nearly there!'}
  }
  else{
    return "You're done! Stop running!"
  }
}
console.log(iTri(150))