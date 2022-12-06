function balancedNum(number){
    const newNum = (''+number).split('').map(Number)
    if(newNum.length <= 2){
        return "Balanced"
    }
    if(newNum.length === 3){
        if(newNum[0] === newNum[newNum.length-1]){
            return "Balanced"
        } else{
            "Not Balanced"
        }
    }
    if(newNum.length === 5){
        if(newNum[0]+newNum[1] === newNum[newNum.length-1] + newNum[newNum.length-2]){
            return "Balanced"
        } else{
            "Not Balanced"
        }
    }
    
    const start = Math.floor(newNum.length / 2) - 1
    const end = Math.floor(newNum.length / 2) + 1
    const arr1 = newNum.slice(0, start)
    const arr2 = newNum.slice(end, newNum.length)
    return arr1.reduce((x,y) => x+y, 0) === arr2.reduce((x,y) => x+y, 0) ?
    "Balanced" : 'Not Balanced'

}
console.log(balancedNum(56239814))