function solution(string,limit){
    if(string.length <= limit){
      return string
    }
    const str = string.split('')
    const arr = []
    for(let i = 0; i < limit; i++){
      arr.push(str[i])
    }
    arr.push('...')
    return arr.join('')
}
console.log(solution('Test', 8))