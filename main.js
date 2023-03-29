function wordsToHex(w,f=x=>x.map(e=>e.charCodeAt().toString(16)).join``){
  return w.split` `.map(e=>{
    if(e.length<3){
      e=[...e]
      e='#'+f(e)
      return e+'0'.repeat(7-e.length)
    }
    return '#'+f([...e.slice(0,3)])
  })
}

console.log(wordsToHex('Hello, my name is Gary and I like cheese.'))