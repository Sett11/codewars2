class SortedList{
    constructor(a=[]){
        this.a=a
        this.length=this.a.length
    }
    bs(n){
        let l=0,r=this.length-1
        while(r-l>1){
            let m=~~((r+l)/2)
            if(this.a[m]<n)l=m
            else r=m
        }
        return l+1
    }

    add(n){
        if(n<=this.a[0])this.a.unshift(n)
        else if(n>=this.a[this.length-1])this.a.push(n)
        else this.a.splice(this.bs(n),0,n)
        this.length+=1
    }
    get(i){
        return this.a[i]
    }
}

let a=Array(100).fill(1).map((e,i)=>e+i)
let s=new SortedList(a)
console.log(s.length)
s.add(34)
console.log(s.length)
console.log(s.get(33))