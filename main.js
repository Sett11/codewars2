function isIntArray(arr) {
  return !arr
    ? false
    : arr.length === 0
    ? true
    : arr.every(
        (el) =>
          !Number.isNaN(el) &&
          !!el === true &&
          Number.isFinite(el) &&
          Number.isSafeInteger(el)&&
          el >-1 && Number.isInteger(el)
      )
    ? true
    : false;
}
console.log(isIntArray([1.2, 1.8, 3]));
