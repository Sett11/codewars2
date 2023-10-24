function getPlanetName(id){
    let name=''
    switch(id){
      case 1:
        return 'Mercury'
      case 2:
        return 'Venus'
      case 3:
        return 'Earth'
      case 4:
        return 'Mars'
      case 5:
        return 'Jupiter'
      case 6:
        return 'Saturn'
      case 7:
        return 'Uranus'
      case 8:
        return 'Neptune'
    }
  }

  console.log(getPlanetName(2))