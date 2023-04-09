const createIterator=a=>{
  return {
    index:0,
    next(){
        const r={value:a[this.index],done:this.index>a.length-1?!0:!1}
        if(this.index!==a.length)this.index+=1
        return r
    }
  }
}

const iterator = createIterator(['One', , 'Two']);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

console.log(iterator.index)