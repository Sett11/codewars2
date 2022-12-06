function menFromBoys(arr){
    const arr1 = []
    const arr2 = []
    const set = [...new Set(arr)]
    for( let i = 0; i < set.length; i++){
        if(set[i] % 2 === 0){
            arr1.push(set[i])
        } else{
            arr2.push(set[i])
        }
    }
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => b-a)
    return arr1.concat(arr2)
}
console.log(menFromBoys([82,91,72,76,76,100,85]))