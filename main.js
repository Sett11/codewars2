class Song{
  title = ''
  artist = ''
  store = []
  constructor(title, artist){
    this.title = title
    this.artist = artist
  }
  howMany(n){
    n = [...new Set(n.map(el => el.toLowerCase()))]
    let cou = 0
    n.map(el => this.store.includes(el) ? cou+=0:cou+=1)
    this.store = [...new Set([...this.store, ...n])]
    return cou
  }
}
const son = new Song('Mount Moose', 'The Snazzy Moose')
console.log(son.howMany(['JoHn', 'Luke', 'AmAndA']))