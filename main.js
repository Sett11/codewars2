function tongues(s){
  const v='aiyeou',z='bkxznhdcwgpvjqtsrlmf'
  return [...s].map(e=>{
    e=e===e.toUpperCase()&&(z+v).includes(e.toLowerCase())?[e.toLowerCase(),1]:[e,0]
    e[0]=v.includes(e[0])?v[(v.indexOf(e[0])+3)%v.length]:z.includes(e[0])?z[(z.indexOf(e[0])+10)%z.length]:e[0]
    e[0]=e[1]?e[0].toUpperCase():e[0]
    return e[0]
  }).join``
}

console.log(tongues('Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.'))