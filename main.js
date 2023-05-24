function fullScan(b,x=b.map(e=>e.split`\n`)){
    const f=a=>{
        for(let i=1;i<a.length;i++){
            for(let j=a[i].length;j>0;j--){
                let t=a[i].slice(0,j)
                if(a[i-1].endsWith(t)){
                    a[i-1]=a[i-1].slice(0,-t.length)
                    break
                }
            }
          }
          return a.join``
    }
  return x[0].map((_,i)=>f(x.map(u=>u[i]))).join`\n`
}
part1=
`trainin
give me`,
part2=
`ning in
 me a n`,
 part3=
`in code
 nice s`,
part4=
`odewars
e solut`,
part5=
`wars
olution`
console.log(fullScan([part1,part2,part3,part4,part5]))
console.log(fullScan(["trainin","ning in","in code","odewars"]))