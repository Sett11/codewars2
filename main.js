function permutations(s) {
return [...new Set([...s].map((e,i,v)=>(v.slice(i)+v.slice(0,i)).replace(/,/g,'')).map(e=>e.split``.map((u,i,v)=>(v.slice(i)+v.slice(0,i)).replace(/,/g,''))).flat().map(e=>e.split``.map((u,i,v)=>(v.slice(i).reverse()+v.slice(0,i)).replace(/,/g,''))).flat().map(e=>e.split``.map((u,i,v)=>(v.slice(i)+v.slice(0,i).reverse()).replace(/,/g,''))).flat().map(e=>e.split``.map((u,i,v)=>(v.slice(i)+v.slice(0,i)).replace(/,/g,''))).flat())]
}
console.log(permutations('aaaab'))
console.log(permutations('aabb'))
console.log(permutations('abcd'))