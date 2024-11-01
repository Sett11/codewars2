// 


// const primes=[2]
// const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
// for(let i=3;i<22000;i+=2)if(f(i))primes.push(i)
// let r={}
// for(let i=2;i<22000;i+=2)r[i]=primes.findIndex(e=>e>i)

// function sumOfPrimeDistance(a){
//   let q=[0],c=0
//   for(let i=-1;++i<a.length-1;)q.push(r[a[i+1]]-r[a[i]])
//   q.push(1)
//   for(let i=0,s=q.reduce((acc,curr)=>acc+curr);q.length-(i*2)-2>0;i++){
//     s-=q[i]+q[q.length-1-i]
//     c+=(q.length-(i*2)-2)*s
//   }
//   return c
// }

// console.log(sumOfPrimeDistance([4,6,12,14,16,20]))
// console.log(sumOfPrimeDistance([16,30,56,66,104,134,164,196,206,236,238]))
// console.log(sumOfPrimeDistance([30,64,66,84,86,122,134,142,156,164,200,206]))



// Condensentences

// const condense=s=>{
//     let a=s.split` `,r=a.shift()
//     for(let i of a){
//         if(r.endsWith(i))continue
//         let v=false
//         for(let j=0;++j<=i.length;){
//             if(r.endsWith(i.slice(0,j))){
//                 r+=i.slice(j)
//                 v=true
//                 break
//             }
//         }
//         if(!v)r+=i
//     }
//     return r
// }

// console.log(condense('29385 4728 89 03 30 200 0 0'))
// console.log(condense("2112 2112"))