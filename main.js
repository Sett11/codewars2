function elapsedSeconds(s, e){
  return (Date.parse(e) - Date.parse(s))/1000
}
console.log(elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 20)))