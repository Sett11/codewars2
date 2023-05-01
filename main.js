function unflatten(a,r=[]){
    for(let i=0;i<a.length;i++){
        if(a[i]<3)r.push(a[i])
        else{
            r.push(a.slice(i,i+a[i]))
            i+=a[i]-1
        }
    }
    return r
}

console.log(unflatten([1,4,5,2,1,2,4,5,2,6,2,3,3]))