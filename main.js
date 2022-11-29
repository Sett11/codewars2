function isSortedAndHow(array) {
  let newArr = array.join('')
    return newArr===array.sort((a, b) => a-b).join('')?"yes, ascending":
    newArr===array.sort((a, b) => b-a).join('')?"yes, descending":
    'no'
}
console.log(isSortedAndHow([15, 7, 3, -8]))