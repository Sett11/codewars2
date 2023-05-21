function mixbonacci(p,l,r=[],x={}){
    if(!p.length||!l)return []
  const o={
    'fib':(n,a=[0, 1, 1, 2, 3])=>{
        for(let i=0;a.length<=n;i++)a.push(a[a.length-1]+a[a.length-2])
        return a
    },
    'jac':(n,a=[0, 1, 1, 3, 5])=>{
        for(let i=0;a.length<=n;i++)a.push(a[a.length-1]+2*a[a.length-2])
        return a
    },
    'pad':(n,a=[1, 0, 0, 1, 0])=>{
        for(let i=0;a.length<=n;i++)a.push(a[a.length-2]+a[a.length-3])
        return a
    },
    'pel':(n,a=[0, 1, 2, 5, 12])=>{
        for(let i=0;a.length<=n;i++)a.push(2*a[a.length-1]+a[a.length-2])
        return a
    },
    'tet':(n,a=[0, 0, 0, 1, 1])=>{
        for(let i=0;a.length<=n;i++)a.push(a[a.length-1]+a[a.length-2]+a[a.length-3]+a[a.length-4])
        return a
    },
    'tri':(n,a=[0, 0, 1, 1, 2])=>{
        for(let i=0;a.length<=n;i++)a.push(a[a.length-1]+a[a.length-2]+a[a.length-3])
        return a
    }
  }
  let q=p.map(e=>[e,o[e](l)])
  for(let i=0;i<q.length;i++)x[q[i][0]]=q[i][1]
  for(let i=0;r.length<l;i++)r.push(x[p[i%p.length]].shift())
  return r
}

console.log(mixbonacci(['tri', 'pel', 'fib', 'pad', 'tri', 'pad', 'tri' ], 10))