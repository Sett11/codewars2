function bandNameGenerator(str) {
  return str[0] !== str[str.length - 1]
    ? `The ${str.charAt(0).toUpperCase() + str.slice(1)}`
    : `${str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1)}`;
}
console.log(bandNameGenerator('tart'));
