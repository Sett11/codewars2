function fix_countdown() {
    delete Array.prototype.Dammit
  }
  function countdown() {
    var ret = "";
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var number in numbers) {
      if (ret) ret += ", ";
      if (number < 10)
        number = 10 - number;
      else if (number == 10)
        number = "Zero";
      ret += number;
    }
    ret += "!";
    return ret;
  }