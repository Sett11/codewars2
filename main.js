function flyBy(lamps, drone) {
  const l = lamps.split("");
  const d = drone.split("");
  for (let i = 0; i < drone.length; i++) {
    if (l[i] === "x") {
      l[i] = "o";
    }
  }
  return l.join("");
}
console.log(flyBy("xxxxxxxxx", "==T"));
