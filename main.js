function wordsToMarks(string){
    let res = 0
    let arr = string.split('')
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i < arr.length; i++){
        res += arr_en.indexOf(arr[i]) + 1
    }
    return res
  }
  console.log(wordsToMarks("friends"))