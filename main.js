let fruitsName=[
  'apple',      'pear',      'banana',
  'watermelon', 'grapes',    'plum',
  'blueberry',  'persimmon', 'pomegranate',
  'pineapple',  'orange',    'mangosteen',
  'durian',     'lemon',     'pitaya',
  'carambola',  'tomato',    'apricot',
  'cherry',     'coconut',   'peach',
  'fig',        'litchi',    'ginkgo',
  'cantaloupe', 'hawthorn',  'mango',
  'jujube'
]

function countFruits(a){
  const r={},n=a.length,u=new Set(fruitsName),w=new Set()
  for(let i=-1;++i<n;){
    if(!w.has(i)){
    for(let j=i;++j<a.length;){
      if(!w.has(j)){
        let s=a[i]+a[j],t=a[j]+a[i]
        if(u.has(s)||u.has(t)){
          if(u.has(s)&&((s.length%2==0&&a[i].length==a[j].length)||(s.length&1&&a[i].length==a[j].length+1))){
            r[s]=(r[s]||0)+1
            w.add(i),w.add(j)
            break
          }
          if(u.has(t)&&((t.length%2==0&&a[j].length==a[i].length)||(t.length&1&&a[j].length==a[i].length+1))){
            r[t]=(r[t]||0)+1
            w.add(i),w.add(j)
            break
          }
        }
      }
    }
  }
}
  return r
}

console.log(countFruits(["app","le","pe","ar","ban","ana"]))
console.log(countFruits(["app","le","app","le","le","le"]))
console.log(countFruits(["le","le","app","app","app"]))
console.log(countFruits(["app","le","appl","e","ap","ple","ale","pp","bo","mb"]))

