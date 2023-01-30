function solution(str){
   const arr = []
   for(let i = 0; i < str.length; i+=2){
    arr.push(str.slice(i,i+2))
   }
   return str.length%2===0? arr : arr.map(el=>el.length===2?el:el+'_')
}
console.log(solution(''))