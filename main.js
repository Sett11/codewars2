function switcher(x){
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse()
  let res = x.slice()
  for(let i = 0; i < arr_en.length + 3; i++){
    if(res[i] === '27'){
      res[i] = '!'
    }
   else if(res[i] === '28'){
      res[i] = '?'
    }
   else if(res[i] === '29'){
      res[i] = ' '
    }
    else{
      res[i] = arr_en[Number(res[i]) - 1]
    }
  }
  return res.filter(el => el !== undefined).join('')
}
console.log(switcher(["21","15","18","17","17","29","29","7","5","17","28","3","2","17","21","20","26","17","10","19","17","15","21","11","27","28","8","2","18"]))