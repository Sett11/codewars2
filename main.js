function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function ListNode(data, next = null) {
  this.data = data;
  this.next = next;
};

function flatten(h){
  if(h===null)return ListNode()
  let r=new Set()
  const f=x=>{
    if(!x)return
    let y=x.value
    while(y)r.add(y.data),y=y.next
    f(x.left)
    f(x.right)
  }
  f(h)
  r=[...r].sort((a,b)=>a-b)
  let head=c=new ListNode(),n=r.length
  for(let i=-1;++i<n;){
    c.data=r[i]
    if(i!==n-1){
      c.next=new ListNode()
      c=c.next
    }
  }
  return head
}

const f=h=>{
  let r=[]
  while(h)r.push(h.data),h=h.next
  return r
}

let l1 = new ListNode(17, new ListNode(1));
let l2 = new ListNode(3);
let l3 = new ListNode(1);
let l4 = new ListNode(2);
let l5 = new ListNode(16);
let l6 = new ListNode(7, new ListNode(3));
let root = new TreeNode(l1, new TreeNode(l2, new TreeNode(l4)), new TreeNode(l3, new TreeNode(l5), new TreeNode(l6)));

console.log(f(flatten(null)))