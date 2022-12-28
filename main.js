const ballCollector = (detritus) => {
  return {weight: detritus
     .filter((el) => el === 58)
     .reduce((acc, curr) => acc + curr, 0)}
}

console.log(ballCollector([58, 68, 62, 69, 58]));
