const Substitution=_=>{
  return{
    Encrypt:s=>[...s].map(e=>(e).charCodeAt()+58).join``,
    Decrypt:s=>s.match(/.{3,3}/g).map(e=>String.fromCharCode(+e-58)).join``
  }
}

const s=Substitution()
console.log(s.Encrypt('abc'))
console.log(s.Decrypt('155156157'))