function chain(input, fs) {
  return fs.reduce((input,curr) => curr(input), input)
}
