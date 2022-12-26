function binRota(arr) {
  return arr.map((el,i) => {
    if(i % 2 !== 0){
      el = el.reverse()
      return el
    }
    return el
  }).flat(1)
}
console.log(
  binRota([
    ["Sam", "Nina", "Tim", "Helen", "Gurpreet", "Edward", "Holly", "Eliza"],
    ["Billy", "Megan", "Aki", "Arun", "Joy", "Anish", "Lee", "Maryan"],
    ["Nick", "Josh", "Pete", "Kavita", "Daisy", "Francesca", "Alfie", "Macy"],
  ])
);
