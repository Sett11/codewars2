function golfScoreCalculator(parList, scoreList) {
  return (
    scoreList.split``.map(Number).reduce((acc, curr) => acc + curr, 0) -
    parList.split``.map(Number).reduce((acc, curr) => acc + curr, 0)
  );
}
console.log(golfScoreCalculator("443454444344544443", "353445334534445344"));
