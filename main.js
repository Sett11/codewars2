function toTime(seconds) {
  const min = (seconds / 60).toFixed(2) % 60
  const hour = (seconds / 3600).toFixed(2)
  return `${Math.floor(hour)} hour(s) and ${Math.floor(min)} minute(s)`
  }
console.log(toTime(0))