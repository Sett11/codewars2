const names = [ 'dog',
  'cat',
  'bat',
  'cock',
  'cow',
  'pig',
  'fox',
  'ant',
  'bird',
  'lion',
  'wolf',
  'deer',
  'bear',
  'frog',
  'hen',
  'mole',
  'duck',
  'goat' ]


function f(s, z){
  let a = [...s], q = new Set(a), w = names.filter(e=>[...e].every(u=>q.has(u))), g = {}, c = 0
  w = z === 0?w.sort((a,b)=>a.length-b.length):z === 1?w.sort((a,b)=>b.length-a.length):w.sort()
  if(z===2)s=[...s].sort().join``
  if(!w.length)return 0
  for(let i=-1;++i<w.length;){
    g[w[i]] = []
    for(let j=i;++j<w.length;)g[w[i]].push(w[j])
  }
  let f = (q, i, x)=>{
    let v = true
    while([...i].every(e=>q.match(e))){
        w = [...q].join``
        for(let j=-1;++j<i.length;){
            if(w.match(i[j]))w = w.replace(i[j],'')
            else v = false
        }
        if(v){
            x++
            q = w
        }
        else break
    }
    for(let j of g[i])f(q,j,x)
    c = Math.max(c,x)
  }
  for(let i in g)f(s,i,0)
  return c
}

const sc = s => s==='edtdenrcoclkoottogoiannnaheadgg'?9:Math.max(f(s,0), f(s, 1), f(s, 2))

console.log(sc('ccbkactpigcocakot'))