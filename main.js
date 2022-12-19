const alphabetWar = (fight) => {
  let arr = fight.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      if (arr[i + 1] !== "*") {
        arr[i + 1] = "&";
      }
      if (arr[i - 1] !== "*") {
        arr[i - 1] = "&";
      } else {
        continue;
      }
    }
  }
  let rightSum = 0;
  let leftsum = 0;
  arr = arr
    .filter((el) => el !== "&" && el !== "*")
    .map((el) => {
      if (el === "w") {
        leftsum += 4;
      }
      if (el === "p") {
        leftsum += 3;
      }
      if (el === "b") {
        leftsum += 2;
      }
      if (el === "s") {
        leftsum += 1;
      }
      if (el === "m") {
        rightSum += 4;
      }
      if (el === "q") {
        rightSum += 3;
      }
      if (el === "d") {
        rightSum += 2;
      }
      if (el === "z") {
        rightSum += 1;
      } else {
        return el;
      }
    });
  return rightSum > leftsum
    ? "Right side wins!"
    : leftsum > rightSum
    ? "Left side wins!"
    : rightSum === leftsum
    ? "Let's fight again!"
    : null;
};
console.log(alphabetWar("p**wz*"));
