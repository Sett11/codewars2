class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

function parse(s){
    const f=x=>{
        let t=null
        x.pop()
        while(x.length>0)t=new Node(x.pop(),t)
        return t
    }
  return f(s.split`->`.map(e=>+e===+e?+e:null))
}

console.log(parse("16 -> null"))