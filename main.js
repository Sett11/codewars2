function isPangram(string){
    let arr = []
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newString = string.replace(/[\W\.]/g, '').toLowerCase().split('')
     for(let i of arr_en){
        let counter = newString.length
        while(counter){
             arr.push(newString.includes(i))
             counter--
        }
     }
     return arr.includes(false) === false ? true : false
  }
  console.log(isPangram("This is not a pangram."))