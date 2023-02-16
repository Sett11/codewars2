class GroupByDifference {
    constructor(n){
        this.n=n.sort((a,b)=>a-b).map((e,i)=>[e,i]).sort((a,b)=>a[1]-b[1])
    }
    find(t){
        const arr=[]
        for(let i = 0; i < this.n.length; i++){
            for(let j = 0; j<this.n.length; j++){
                if(Math.abs(this.n[i][0]-this.n[j][0])<=t&&i!==j&&this.n[i][1]!==this.n[j][1]){
                    arr.push(this.n[j])
                }
            }
        }
        arr.sort((a,b)=>a[1]-b[1])
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i][1]===arr[i+1][1]){
                arr[i]='&'
            }
        }
        return arr.filter(e=>e!=='&').map(e=>e[0])
    }
  }
  console.log(new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8]).find(2))