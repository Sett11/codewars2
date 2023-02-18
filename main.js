function findCharacters(m){
    const total=Object.entries([...m.replace(/[\n\s]/g,'')].reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{})).sort((a,b)=>a[1]-b[1]),check=total[0][1],res1=[],res2=[],res3=[]
    total.filter(e=>e[1]===check).map(e=>e[0]).map(e=>+e==e?+e:e).map(e=>typeof e==='string'&&e===e.toUpperCase()?res1.push(e):typeof e==='string'&&e===e.toLowerCase()?res2.push(e):res3.push(+e))
    return res1.sort().concat(res2.sort().concat(res3)).join``
}
  console.log(findCharacters(`3v652
  1uwyt
  v254v
  t54tv
  x45yx
  s7x45
  5402v
  2x3xw
  5w22v`))