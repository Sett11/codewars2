function cubeOdd(arr) {
    let newArr = []
    for( let i = 0; i < arr.length; i++){
        if(arr[i] !== Number(arr[i])){
            return undefined
        } else{
            newArr.push(arr[i])
        }
    }
    return newArr
    .filter(el => el % 2 !== 0)
    .map(el => el**3)
    .reduce((acc, cur) => acc + cur, 0)
}
console.log(cubeOdd([1, 2, 3, 4]))