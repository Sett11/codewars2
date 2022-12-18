function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6){
    return false
  }
  if(pin.replace(/\D/g, '').length < pin.length){
    return false
  }
  return true
}
console.log(validatePIN('12.0'))