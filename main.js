function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }

getKthLastElement=f=(h,k,a=[])=>!h?a[a.length-k-1]:a.push(h)&&f(h.next,k,a)

console.log(getKthLastElement(new Node(1, new Node(2, new Node(3))),0))
