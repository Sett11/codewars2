function bingo(ticket, win) {
  const arr = ticket.map((el) => {
    return [el[0].split(""), el[1]];
  });
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][0].length; j++) {
      arr[i][0][j] = arr[i][0][j].charCodeAt(arr[i][0][j]);
      if (arr[i][0][j] === arr[i][0][j]) {
      }
      if (arr[i][0][j] === arr[i][1]) {
        counter += 1;
        break;
      }
    }
  }
  return counter < win ? "Loser!" : "Winner!";
}
console.log(
  bingo(
    [
      ["BGRWIML", 71],
      ["ZYHHZOO", 80],
      ["WKZVG", 79],
      ["YZLNDWO", 87],
      ["IXNBE", 69],
      ["CMDCHWIC", 67],
      ["XPNI", 65],
      ["DBSHG", 80],
      ["RBD", 77],
      ["WQXJRE", 85],
    ],
    5
  )
);
