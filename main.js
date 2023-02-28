function solution(a){
  for(let i=0;i<a.length-1;i++){
    if(Math.abs(a[i]-a[i+1])!==1)continue
    if(Math.abs(a[i]-a[i+1])===1&&Math.abs(a[i+1]-a[i+2])===1){
      for(let j=i+1;j<a.length;j++){
        if(Math.abs(a[j]-a[j+1])!==1){
          a=a.slice(0,i).concat([a[i],'-',a[j]]).concat(a.slice(j+1))
          break
        }
      }
    }
  }return a.join`,`.replace(/,-,/g,'-')
}
 console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))