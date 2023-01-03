function total(arr){
    for(let i = 0; i < arr.length; i++){
        if(i === 0 || i === 1){
            arr[i] = 0
        }
        if(i === 2){
            continue
        }
        else{
            for(let j = 2; j < i; j++){
                if(i % j === 0){
                    arr[i] = 0
                } else{
                    continue
                }
            }
        }
    }
    return arr.reduce((acc,curr) => acc+curr,0)
}
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))