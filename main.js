function average(scores) {
  const s = scores.reduce((acc, curr) => acc + curr) / scores.length
  return s < Math.ceil(s) - 0.5 ? Math.floor(s): Math.ceil(s)
}
console.log(average([90,98,89,100,100,86,94]))