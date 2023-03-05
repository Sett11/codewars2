Number.prototype.palindromeBelow = function(b,a=[]){
    for(let i=1;i<+this.toString();i++){
        let tmp=(i).toString(b)
        if(tmp===[...tmp].reverse().join``)a.push(i)
    }return a
}

console.log((15).palindromeBelow(10))