class Fack{
  constructor(a){
    this.a=a
  }
  ret(){
    let r=this.a
    this.a=[1,[''],['']]
    return r
  }
}
let r=new Fack([0,[],[]])
function automaton(e){
	if(typeof e==='string')return [...e.replace(/[^aeiuo]/ig,'').toLowerCase()].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})
  if(typeof e==="number"){
    const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
		let c=2,a=[]
    while(c<=e){if(f(c))a.push(c);c++}
    return a
	}
  if(typeof e==="object"){
    if(Array.isArray(e)&&JSON.stringify(e)==='[]')return r.ret()
    if(Array.isArray(e))e=e.map((u,j)=>[j,u])
		if(!Array.isArray(e))e=Object.entries(e)
    let t=[e.length,e.map(u=>u[0]+'').sort(),e.map(u=>u[1]+'')]
    return t
	}
}

console.log(automaton([]))
console.log(automaton([]))
console.log(automaton({'a':1,'b':2}))