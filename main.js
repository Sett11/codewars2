function collatz(n){
    const arr=[n]
    while(arr[arr.length-1]>1){
        if(n%2===0){n/=2;arr.push(n)}
        if(n%2!==0&&n!==1){n=3*n+1;arr.push(n)}
    }
    return arr.join`->`
}
console.log(collatz(3))


// function longestCollatz (a) {
//   return a.map((e,i)=>{
//     e=[e,0,e,i],val=true
//     if(e[0]>1){
//         while(e[0]!==1){
//             if(e[0]%2===0){e[0]/=2;e[1]+=1}
//             if(e[0]%2!==0&&e[0]!==1){e[0]=3*e[0]+1;e[1]+=1}
//             if(e[0]===1)val=false
//         }
//     }return e
//   }).sort((a,b)=>b[1]-a[1]||a[3]-b[3]).map(e=>e[2])[0]
// }
// console.log(longestCollatz([2, 5, 32]))
// console.log(longestCollatz([64, 64, 27, 64]))