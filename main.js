function setReducer(a,r=[]){
    for(let i=0;i<a.length;i++){
        if(a[i]!==a[i+1])r.push(1)
        else{
            for(let j=i;j,a.length;j++){
                if(a[j]!==a[j+1]){
                    r.push(a.slice(i,j+1).length)
                    i=j;break
                }
            }
        }
    }
    return r.length==1?r[0]:setReducer(r,[])
}

  console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]))