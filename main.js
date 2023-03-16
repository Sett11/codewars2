ranks=b=>b.map(e=>b.slice().sort((a,b)=>b-a).indexOf(e)+1)

console.log(ranks([5,2,3,5,5,4,9,8,0]))