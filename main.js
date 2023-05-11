function lazyChain(a){
     class W{
      constructor(x){
          this.x=x
          this.arr=[]
      }
      invoke(...y){
          this.arr.push([...y])
          return this
      }
      value(){
          return this.arr.reduce((a,c)=>a=(c.length===1?a[c[0]]():c.length===2?a[c[0]](c[1]):a[c[0]](c[1],c[2])),this.x)
      }
     }
     return new W(a)
  }

  console.log(lazyChain([1,2,3])
  .invoke('map', x => x * x)
  .invoke('reverse')
  .value())