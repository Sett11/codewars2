const f=(s,c='')=>{
  if(s.length<3)return c
  let ns=[...s],t,v
  if(ns.length&1){
    t=ns.slice(0,~~(ns.length/2)),v=ns.slice(~~(ns.length/2)+1)
    c+=ns[~~(ns.length/2)]
    c+=f(t)+f(v)
  }
  else{
    t=ns.slice(0,~~(ns.length/2)-1),v=ns.slice(~~(ns.length/2)+1)
    c+=ns.slice(~~(ns.length/2)-1,~~(ns.length/2)+1).join``
    c+=f(t)+f(v)
  }
  return c
}
const midPoint=x=>x.split` `.map(e=>f(e)).join` `


console.log(midPoint('a ab abc abcd abcde abcdef abcdefg abcdefgh abcdefghi abcdefghij'))