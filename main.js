function wheresWally(s){
    return (' '+s).search(/ Wally\b/)
}

console.log(wheresWally(''))
console.log(wheresWally('Wally'))
console.log(wheresWally('.Wally'))
console.log(wheresWally("Where's Wally"))