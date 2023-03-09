function rotate(b,w,n=w%b.length,a=b.slice()){
    while(n!==0){
        if(n>0){
            a.unshift(a.pop())
            n--
        }
        if(n<0){
            a.push(a.shift())
            n++
        }
    }
    return a
}
  console.log(rotate( [ 5, 1, 2, 3, 4 ],2))
  console.log(rotate( [1, 2, 3, 4, 5],5))