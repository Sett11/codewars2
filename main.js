function semicolonSeparationToCommaSeparation(s,a=s.split(';')){
    return `${a[0]},${a[1]},${a[2]}`
  }

  console.log(semicolonSeparationToCommaSeparation("1;2;3"))