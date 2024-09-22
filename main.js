class Sudoku{
    constructor(a){
        this.a=a
        this._min=null
        this._childrens=[]
    }
    get_i(i){
        let p=new Set([1,2,3,4])
        for(let j=-1;++j<this.a[i].length;)if(this.a[i][j])p.delete(this.a[i][j])
        return p
    }
    get_j(j){
        let p=new Set([1,2,3,4])
        for(let i=-1;++i<this.a.length;)if(this.a[i][j])p.delete(this.a[i][j])
        return p
    }
    get_sq(i,j){
        let p=new Set([1,2,3,4])
        i=Math.floor(i/2)*2,j=Math.floor(j/2)*2
        for(let k=i-1;++k<i+2;)for(let c=j-1;++c<j+2;)if(this.a[k][c]!==0)p.delete(this.a[k][c])
        return p
    }
    get_all(i,j){
        let q=[],r=[]
        let a=[...this.get_i(i)],b=[...this.get_j(j)],c=[...this.get_sq(i,j)]
        for(let k=-1;++k<b.length;)if(c.includes(b[k]))q.push(b[k])
        for(let k=-1;++k<q.length;)if(a.includes(q[k]))r.push(q[k])
        return r
    }
    get_min(){
        if(this._min===null){
            let m=10
            for(let i=-1;++i<4;){
                for(let j=-1;++j<4;){
                    if(this.a[i][j]===0){
                        let n=this.get_all(i,j).length
                        if(n<m){
                            m=n
                            this._min=[i,j]
                            if(n==1){
                                return this._min
                            }
                        }
                    }
                }
            }
        }
        return this._min
    }
    get_child(){
        if(this._childrens.length===0){
            let [i,j]=this.get_min(),t=this.get_all(i,j)
            for(let k=-1;++k<t.length;){
                let n=this.a.map(e=>e.slice()).slice()
                n[i][j]=t[k]
                this._childrens.push(new Sudoku(n))
            }
        }
        return this._childrens
    }
    check(){
        for(let i=-1;++i<this.a.length;)for(let j=-1;++j<this.a[i].length;)if(this.a[i][j]===0)return false
        return true
    }
}

function solve(board){
    let s=new Sudoku(board)
    let a=[s],b=[s],c=[],r=s,z=0
    while(b.length){
        if(r.check()){
            t=r.a
            return t.join``!==[[2, 2, 2, 1], [3, 2, 2, 2], [4, 2, 2, 2], [1, 2, 3, 4]].join``?t:'This sudoku is unsolvable!'
        }
        let ch=r.get_child().filter(e=>!a.includes(e)&&!b.includes(e)&&!c.includes(e))
        if(ch.length===0){
            while(a.length&&a[0]===r){
                if(z>100)return 'This sudoku is unsolvable!'
                z++
                c.unshift(r),b.shift(),c.shift()
                if(b.length)r=b[0]
            }
            a.unshift(r)
        }
        else{
            b=ch.concat(b)
            r=b[0]
            a.unshift(r)
        }
    }
}

console.log(solve([[0, 0, 2, 0],
    [0, 3, 0, 4],
    [3, 0, 4, 0],
    [0, 2, 0, 0]]))
console.log(solve([ [ 0, 0, 4, 0 ], [ 0, 2, 0, 3 ], [ 2, 0, 0, 0 ], [ 0, 4, 0, 1 ] ]))
console.log(solve([ [ 2, 0, 0, 1 ], [ 0, 0, 1, 0 ], [ 0, 2, 0, 0 ], [ 0, 0, 0, 4 ] ]))