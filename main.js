function upArray(arr) {
  const newArr = arr.slice();
  if(!newArr.length){
    return null
  }
  if(!newArr.every(el => el < 10 && el >=0)){
    return null
  }
  if(newArr.every(el => el === 0)){
    newArr.unshift(1)
    return newArr
  }
  if (newArr[newArr.length - 1] === 0) {
    newArr[newArr.length - 1] = 1;
    return newArr;
  }
  else {
    let counter = newArr.length;
    while (counter >= 0) {
      if (newArr[counter] === 9) {
        newArr[counter] = 0;
      }
      if (newArr[counter] === 1) {
        newArr[counter] = 2;
        counter = -1;
      }
      if (newArr[counter] === 2) {
        newArr[counter] = 3;
        counter = -1;
      }
      if (newArr[counter] === 3) {
        newArr[counter] = 4;
        counter = -1;
      }
      if (newArr[counter] === 4) {
        newArr[counter] = 5;
        counter = -1;
      }
      if (newArr[counter] === 5) {
        newArr[counter] = 6;
        counter = -1;
      }
      if (newArr[counter] === 6) {
        newArr[counter] = 7;
        counter = -1;
      }
      if (newArr[counter] === 7) {
        newArr[counter] = 8;
        counter = -1;
      }
      if (newArr[counter] === 8) {
        newArr[counter] = 9;
        counter = -1;
      }
      if (newArr[counter] < 0 || newArr[counter] > 9) {
        return null;
      }
      counter--;
    }
    if (newArr.length === 2 && newArr[0] === 0 && newArr[1] === 0) {
      newArr[0] = 1;
      newArr.push(0);
      return newArr;
    }
    if (newArr.length === 0) {
      return null;
    }
    if(newArr.every(el => el === 0)){
      newArr.unshift(1)
      return newArr
    }
    if(!newArr.every(el => el < 10 && el >=0)){
      return null
    }
    return newArr.filter((el) => !Number.isNaN(el))
  }
}


console.log(upArray([9,9,9,9]));
