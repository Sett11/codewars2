function romanize(s) {
  const o={'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'i','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'ie','ы':'y','ь':'','э':'e','ю':'iu','я':'ia'}
  return s.toLowerCase().split` `.map(e=>{
    e=e.replace(/./g,e=>o[e])
    return e.charAt(0).toUpperCase()+e.slice(1)
  }).join` `
}

console.log(romanize('Иван Иванович'))
console.log(romanize('Никита Смирнов'))