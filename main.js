
// hidePasswordFromConnection=s=>{
//     const f=x=>{
//         const a=x.split`&`,z=a[0].split`=`
//         return `${z[0]}=${'*'.repeat(z[1].length)}${a[1]?('&'+a[1]):''}`
//     }
//     return s.replace(/password\=.+/,f)
// }

// console.log(hidePasswordFromConnection('ihrv8uworovwo&password=12djlk sp&user=vasia'))




// Timmy Time

// function changeTime(s,n){
//    let a=s.split`:`,d=new Date(0,0,0,+a[0],+a[1] +n,0)
//    let r=[d.getHours(),d.getMinutes()]
//    if(r[0]<10)r[0]='0'+r[0]
//    if(r[1]<10)r[1]='0'+r[1]
//    return r.join`:`
// }

// console.log(changeTime('10:00', -1))
// console.log(changeTime('23:59', 1))




// Simple Fun #338: The Sum Of Prime Distance


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