function dirReduc(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      arr[i] = 0;
      arr[i + 1] = 0;
    } else if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
      arr[i] = 0;
      arr[i + 1] = 0;
    } else if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      arr[i] = 0;
      arr[i + 1] = 0;
    } else if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
      arr[i] = 0;
      arr[i + 1] = 0;
    } else {
      newArr.push(arr[i]);
    }
  }
  const res = newArr.filter((el) => el !== 0);
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "NORTH" && res[i + 1] === "SOUTH") {
      res[i] = 0;
      res[i + 1] = 0;
    } else if (res[i] === "SOUTH" && res[i + 1] === "NORTH") {
      res[i] = 0;
      res[i + 1] = 0;
    } else if (res[i] === "EAST" && res[i + 1] === "WEST") {
      res[i] = 0;
      res[i + 1] = 0;
    } else if (res[i] === "WEST" && res[i + 1] === "EAST") {
      res[i] = 0;
      res[i + 1] = 0;
    }
  }
  return res.filter((el) => el !== 0);
}
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
