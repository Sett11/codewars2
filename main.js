var mispelled = function(word1, word2){
    if(word1===word2){
        return true
    }
    let counter = 0
    for(let i = 0; i < word1.length + 2; i++){
        if(word1[i]!==word2[i]){
            counter+=1
        }
    }
    return word1.replace(word2, '').length===1||word2.replace(word1,'').length===1||counter===1 ? true : false
}
console.log(mispelled('1versed', 'versed'))
