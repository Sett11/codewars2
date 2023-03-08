function twosDifference(a,b=[]){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(Math.abs(a[i]-a[j])===2){
                b.push([a[i],a[j]])
            }
        }
    }
    return b.map(e=>e.sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0])
}

   console.log(twosDifference([4, 3, 1, 5, 6]))