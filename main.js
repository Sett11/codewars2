function wordSearch(w,t){
  return t.split` `.map(e=>e.replace(/\W/g,'')).some(e=>e===w)
}
console.log(wordSearch('beautiful',"what makes the desert beautiful, said the little prince is that somewhere it hides a well"))