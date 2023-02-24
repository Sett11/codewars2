function eulersTotientFunction(n) {
    let arr=Array(n).fill(1).map((e,i)=>[i+1,Array(i+1).fill(1).map((u,j)=>j+1).filter(z=>(i+1)%z===0)]),check=arr[arr.length-1]
    return n===1?1:arr.slice(0,arr.length-1).filter(e=>e[1].every(u=>u===1?u:!check[1].includes(u))).length
  }
  console.log(eulersTotientFunction(49))