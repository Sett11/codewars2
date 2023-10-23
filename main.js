function formatDataValue(n) {
    let a=b=c=0
    while(n>=1000000){
          a+=1
          n-=1000000
      }
    while(n>=1000){
          b+=1
          n-=1000
      }
    if(n>=1)c=n
    return `${a?a+'tb':''} ${b?b+'gb':''} ${c?c+'mb':''}`.toUpperCase().trim()||'0MB'
  }

console.log(formatDataValue(1234567))
console.log(formatDataValue(1000000))