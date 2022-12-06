function multipleOfIndex(array) {
    const newArr = []
    array.map((el, i) => {
        if(el % i === 0){
            newArr.push(el)
        }
    })
    return newArr
}
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))