class PaginationHelper {
	constructor(a,n) {
	this.a=a
  this.n=n
  this.arr=[]
  for(let i=0;i<this.a.length;i+=this.n)this.arr.push(this.a.slice(i,i+this.n))
	}
	itemCount=()=>this.a.length
	pageCount=()=>this.arr.length
	pageItemCount=n=>this.arr[n]?this.arr[n].length:-1
	pageIndex=n=>n<0||n>=this.a.length||!this.a.length?-1:n<this.n?0:~~(n/this.n)
}

const r=new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],4)

console.log(r.pageIndex(17))