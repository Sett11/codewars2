function shortenToDate(longDate) {
  return longDate.replace(/,.+$/, '')
}
console.log(shortenToDate("Friday May 2, 9am"))