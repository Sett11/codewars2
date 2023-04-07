splitOddAndEven=n=>(n+'').match(/[13579]+|[2468]+/g).map(Number)


  console.log(splitOddAndEven(223))