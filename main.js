function search_permMult(m,k,c=1000,a=[]) {
    while(c<m){
        if([...c+''].sort().join``===[...(c*k)+''].sort().join``&&c<m&&(c*k)<m){
            a.push([c,c*k])
        }
        c++
    }return a.length
}
  console.log(search_permMult(5000,3))