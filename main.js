function sortMyString(S) {
    const newS = S.split('')
    const arr1 = []
    const arr2 = []
    newS.map((el, i, newS) => {
        if(i % 2 === 0){
            arr1.push(el)
        } else{
            arr2.push(el)
        }
    })
    arr1.push(' ')
    return arr1.concat(arr2).join('')
}
console.log(sortMyString("YCOLUE'VREER"))