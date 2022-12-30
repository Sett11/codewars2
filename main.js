function scoreboard(s) {
  s = s
    .replace(/nil/g, "0")
    .replace(/one/g, "1")
    .replace(/two/g, "2")
    .replace(/three/g, "3")
    .replace(/four/g, "4")
    .replace(/five/g, "5")
    .replace(/six/g, "6")
    .replace(/seven/g, "7")
    .replace(/eight/g, "8")
    .replace(/nine/g, "9")
    .replace(/\D/g, "");
  return s.split``.map(Number);
}
console.log(scoreboard("The score is four nil"));
