function pillars(numPill, dist, width) {
    if(numPill <= 1){
        return 0
    }
    if(numPill === 2){
        return dist * 100
    }
    return numPill * ((dist * 100) + width) - (width * 2) - (dist * 100)
  }
  console.log(pillars(11, 15, 30))