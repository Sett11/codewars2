function factory(a){
  const f=x=>x.map(e=>typeof e==='function'?e():e).reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
  const r=f(a).sort((a,b)=>a.priority-b.priority).map(e=>e.item),z=[]
  for(let i=0;i<r.length;i+=10)z.push(r.slice(i,i+10))
  return z
}
console.log(factory([
  [{item: 'item 3', priority: 3}, {item: 'item 1', priority: 1}],
  [{item: 'item 2', priority: 2}]
]))
console.log( factory([
  function() {return [
    {item: 'item 3', priority: 3}, {item: 'item 2', priority: 2}
  ]},
  [{item: 'item 1', priority: 1}],
]))
console.log( factory([
  [{item: 'wrench', priority: 1}, {item: 'socket set', priority: 10}],
  function () { return [{item: 'cake', priority: 8}, {item: 'glue', priority: 5}] },
]))