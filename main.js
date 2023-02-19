function sumtheDifference(u) {
  let arr=[],e=[...u.replace(/ /g,'')]
  for(let i=0;i<e.length;i++){
    if(e[i]==='-'&&typeof +e[i+1]==='number'&&+e[i+1]===+e[i+1]){
    arr.push(e[i]+e[i+1])
    e.splice(i+1,1)
  }
  arr.push(e[i])
}arr=arr.filter(e=>typeof +e==='number'&&+e===+e&&e!==' ').map(Number),sum1=arr.filter(e=>Math.abs(e%2===0)).reduce((a,c)=>a+c,0),sum2=arr.filter(e=>Math.abs(e%2!==0)).reduce((a,c)=>a+c,0)
return sum1-sum2
}
console.log(sumtheDifference("(-25) + (-75) + 50 - 40 - (22 + 2)"))
console.log(sumtheDifference("2 + -)     2        "))
console.log(sumtheDifference("(-100) + 100 - (-200) + 1"))
console.log(sumtheDifference("(-25) + (-75 )+ 50 - (-40 ) - (-80)"))
console.log(sumtheDifference("999 + 999 + 999 + 888 + 888 - (-777)"))
console.log(sumtheDifference("49)-3044203+571+7335 "))
console.log(sumtheDifference("--9((2)(1)()---+(9 +(    -(()- 9+-8-7)) 5  3 0 -))59-1-++++7 )51)-9+ )8(+( (()"))