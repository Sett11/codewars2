function killer(suspectInfo, dead) {
  return Object.entries(suspectInfo).filter((el) => {
    if (el[1].includes(...dead)) {
      return el[0];
    }
  })[0][0];
}
console.log(killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]));
