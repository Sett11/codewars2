function solution(a,c=0,z=0,x=0){
  while(1){
    if(c>=a.length||c<0)return x
    if(x===a.length)return -1
    c+=a[z],z+=a[z],x++
  }
}

console.log(solution([-3]))