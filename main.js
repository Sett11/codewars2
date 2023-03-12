function encode(s,a=[]){
  if(!s)return ['','fack']
  const r=[...s].map((a,i,v)=>(v.slice(i)+'&'+v.slice(0,i)).replace(/&/g,',').split`,`.filter(e=>e)).sort()
  r.forEach(e=>a.push(e[e.length-1]))
  return [a.join``,r.map(e=>e.join``).indexOf(s)]
 }
 
 function decode(s,z,c=[...s].sort(),a=[...s]) {
   if(!s)return ''
   for(let i=0;i<s.length-1;i++){
     for(let j=0;j<s.length;j++){
       a[j]+=c[j].charAt(i)
       c[j]=a[j]
     }
     c.sort()
   }
   return c[z]
 }

console.log(encode("bananabar"))

// ['a', 'b', 'a', 'r', 'b', 'a', 'n', 'a', 'n']
// 1
// : 
// (9) ['a', 'n', 'a', 'b', 'a', 'r', 'b', 'a', 'n']
// 2
// : 
// (9) ['a', 'n', 'a', 'n', 'a', 'b', 'a', 'r', 'b']
// 3
// : 
// (9) ['a', 'r', 'b', 'a', 'n', 'a', 'n', 'a', 'b']
// 4
// : 
// (9) ['b', 'a', 'n', 'a', 'n', 'a', 'b', 'a', 'r']
// 5
// : 
// (9) ['b', 'a', 'r', 'b', 'a', 'n', 'a', 'n', 'a']
// 6
// : 
// (9) ['n', 'a', 'b', 'a', 'r', 'b', 'a', 'n', 'a']
// 7
// : 
// (9) ['n', 'a', 'n', 'a', 'b', 'a', 'r', 'b', 'a']
// 8
// : 
// (9) ['r', 'b', 'a', 'n', 'a', 'n', 'a', 'b', 'a']