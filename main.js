class Event {
  constructor(arr=[]){
      this.arr=arr
  }
  subscribe(fn){
      this.arr.push(fn)
  }
  unsubscribe(f){
      if(this.arr.includes(f)){
          this.arr = this.arr.filter(el=>el!==f)
      }
  }
  emit(...args){
      return this.arr.map(el=>el(...args))
  }
}


