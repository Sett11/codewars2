solve=a=>{
	let r=a.slice().sort((a,b)=>a-b),v=a.join``,c=a.length
    if(r.join``===v)return 'A'
    while(r.join``!==v){
        r.unshift(r.pop())
        if(r.join``===v)return 'RA'
        c--
        if(c===0&&r!==v){
            c=a.length;break
        }
    }
    let z=a.slice().sort((a,b)=>b-a)
    if(z.join``===v)return 'D'
    while(z.join``!==v){
        z.push(z.shift())
        if(z.join``===v)return 'RD'
    }
}

console.log(solve([1,2,3,4,5,7]))
console.log(solve([5,9,8,7,6]))
console.log(solve([
    522, 748, 762, 787, 877,903, 990,   1, 111, 151,159, 193, 303, 421, 504
  ]))