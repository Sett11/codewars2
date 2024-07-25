class Node{
  constructor(val,next,previous){
    this.val=val
    this.next=next
    this.previous=previous
  }
}

class Queue{
  constructor(head,tail,lenght=0){
    this.head=head
    this.tail=tail
    this.lenght=lenght
  }

  size(){
    return this.lenght
  }
  enqueue(v){
    if(!this.tail){
      this.head=this.tail=new Node(v)
      this.lenght++
      return
    }
    else{
      let h=new Node(v)
      if(this.tail&&this.tail===this.head){
        this.tail.previous=this.tail
        this.head.next=this.tail=h
    }
      else{
      h.previous=this.tail
      this.tail.next=this.tail=h
      }
    }
      this.lenght++
  }
  dequeue(){
    if(this.head){
      let v=this.head.val
      if(this.head===this.tail){
        this.head=this.tail=undefined
      }
      else{
        this.head=this.head.next
      }
      this.lenght--
      return v
    }
    }
}

Q=new Queue()

Q.enqueue(1)
// Q.enqueue(2)
// Q.enqueue(3)

console.log(Q.dequeue(),Q.size())