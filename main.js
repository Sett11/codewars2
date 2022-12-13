function hydrate(s) {
  const res  = s.split(/\D/).filter(el => el !== '').map(el => el = Number(el)).reduce((acc, curr) => acc + curr)
  if(res === 1){
    return `${res} glass of water`
  }
  return `${res} glasses of water`
}
console.log(hydrate("1 shot"))