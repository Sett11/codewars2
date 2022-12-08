function fuelPrice(litres, pricePerLitre) {
  let count = pricePerLitre
  if(litres < 2){
    count = pricePerLitre
    return Number(((litres * count)).toFixed(2))
  }
  if(litres >= 2 && litres < 4){
    count = count - 0.05
    return Number(((litres * count)).toFixed(2))
  }
  else if(litres >= 4 && litres < 6){
    count = count - 0.10
    return Number(((litres * count)).toFixed(2))
  }
  else if(litres >= 6 && litres < 8){
    count = count - 0.15
    return Number(((litres * count)).toFixed(2))
  }
  else if(litres >= 8 && litres < 10){
    count = count - 0.2
    return Number(((litres * count)).toFixed(2))
  } else{
    count = count - 0.25
    return Number(((litres * count)).toFixed(2))
  }
}
console.log(fuelPrice(5, 1.23))