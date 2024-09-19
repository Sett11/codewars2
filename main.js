class ListNode{
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class TreeNode{
  constructor(value, left, right){
    this.value = value
    this.left = left
    this.right = right
  }
}


function flatten(h){
  if(!h)return null
  let r=new Set()
  const f=x=>{
    if(!x)return
    r.add(x.value)
    f(x.left)
    f(x.right)
  }
  
  while(h){
    f(h.data)
    h=h.next
  }
  r=[...r].sort((a,b)=>b-a)
  let t=new TreeNode(r.pop()),que=[t]
  while(r.length){
    let x=que.pop()
    if(!r.length)break
    x.left=new TreeNode(r.pop())
    if(!r.length)break
    x.right=new TreeNode(r.pop())
    que.unshift(x.left),que.unshift(x.right)
  }
  return t
}

let t1 = new TreeNode(1, null, new TreeNode(2));
let t2 = new TreeNode(4);
let t3 = new TreeNode(3, new TreeNode(4), new TreeNode(2));
let t4 = new TreeNode(6, null, new TreeNode(5));

let head = new ListNode(t1, new ListNode(t2, new ListNode(t3, new ListNode(t4))));

console.log(flatten(head))
console.log(flatten(new TreeNode()))