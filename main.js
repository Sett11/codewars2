class WordDictionary{
  constructor(a=[]){
    this.arr=a
  }
  addWord(s){
    this.arr.push(s)
    this.arr.sort((a,b)=>a.length-b.length)
  }
  search(s){
    for(let i=0;i<this.arr.length;i++){
      if(this.arr[i].length>s.length)return false
      if(RegExp(`${s}`).test(this.arr[i])&&s.length===this.arr[i].length)return true
    }
    return false
  }
}

const r= new WordDictionary()
r.addWord('a');
r.addWord('at');
r.addWord('ate');
r.addWord('ear');

console.log(r.search('e.'))
