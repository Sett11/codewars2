function reverse(a) {
    for(let i=0,j=a.length-1; i<j; i++,j--){
        tmp=a[j]
        a[j]=a[i];
        a[i]=tmp;
    }return a
}

 console.log(reverse([1,2,3,4,5]))