function periodIsLate(last, today, cycleLength){
  return Date.parse(today) -  Date.parse(last) > cycleLength * ((24*3600)*1000)
}
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))