class Cons{
    constructor(head,tail){
    this.head = head;
    this.tail = tail;
    }
}
function toArray(list) {
    if(list){
        var more = list.tail;
        return [list.head].concat(more? toArray(more) : []);
    }
    return [];
}
Cons.prototype.toArray = function(){ return toArray(this); };

Cons.fromArray=function(a){
    let t=null
    while(a.length){
        t=new Cons(a.pop(),t)
    }
    return t
}
  
 Cons.prototype.filter=function(p){
    let t=this.tail&&this.tail.filter(p)
    return p(this.head)?new Cons(this.head,t):t
  }
  
  Cons.prototype.map=function(m){
    return new Cons(m(this.head),this.tail&&this.tail.map(m))
  }
  const r=new Cons()
  const x=r.fromArray([ 1, 2, 3, 4, 5 ])
  console.log(map(x,e=>e**2))
  