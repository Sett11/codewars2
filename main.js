function palindrome(num,s) {
    if(num<0||s<0||!Number.isInteger(num)||!Number.isInteger(s)||typeof num!=='number'||typeof s !=='number'){
        return "Not valid"
    }
    const arr = []
    if(String(num).split``.reverse().join``===String(num)&&String(num).split``.length > 1){
        arr.push(num)
    }
    for(let i = num; ; i++){
        if(String(i).split``.reverse().join``===String(i)&&String(i).split``.length > 1&&arr.indexOf(i)===-1){
            arr.push(i)
        }
        if(arr.length===s){
            break
        }
    }
    return arr
}
  console.log(palindrome(493,0))