function array(arr){
    let newArr = arr.split(/,/)
    if(newArr.length <= 2){
        return null
    }
    newArr.shift()
    newArr.pop()
    return newArr.join(' ')
}
console.log(array('1,2,3,4'))