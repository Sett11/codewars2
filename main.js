function solution(fullText, searchText){
    if(fullText.length===0){
      return 0
    }
      const r = new RegExp(`${searchText}`, 'g')
      return fullText.match(r)? fullText.match(r).length : 0
  }
console.log(solution('abbc','bb'))