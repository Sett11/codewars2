function canalMania(l,h,n,f=x=>x.reduce((a,c)=>a+c,0),c=0,s=0){
    while(l.length||h.length){
        let t=[]
        while(1){
            if(!(c%2)){
                t.push(l.shift()||0)
                if(f(t)>n){
                    l.unshift(t.pop())
                    break
                }
                if(!l.length)break
            }
            if(c%2){
                t.push(h.shift()||0)
                if(f(t)>n){
                    h.unshift(t.pop())
                    break
                }
                if(!h.length)break
            }
        }
        c++
        let m=f(t)
        s+=m*2+2
    }
    return !(c&1)?s:s+2
}

console.log(canalMania([], [], 10))
console.log(canalMania([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 30))