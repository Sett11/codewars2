function f(n){
  if(n<2)return false
  if(n<4)return true
  for(let i=2;i<n**.5+1;i++)if(n%i==0)return false
  return true
}

function primes(s,e){
	let r=[]
  for(let i=s;i<=e;i++)if(f(i))r.push(i)
  return r.length?r:null
  }

console.log(primes(100,200))