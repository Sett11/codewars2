priceIsRight=(a,n)=>a.sort((a,b)=>b-a).find(e=>e<=n)


console.log(priceIsRight([1,2,3,4],4))
console.log(priceIsRight([1,2,3,4],5))
console.log(priceIsRight([1,2,3,4],0))