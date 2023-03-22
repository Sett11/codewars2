function minimumBillCount(v,b,a=b.sort((a,b)=>b-a),c=0){
    for(let i=0;i<a.length;i++){
        if(v===0)break
        if(v>=a[i]){
            while(v>=a[i]){
                v-=a[i]
                c++
            }
        }
    }
    return c
}

console.log(minimumBillCount(1010, [50, 20, 1]))