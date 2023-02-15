function solve(a,b){
   arr=[],res=[],c=0,z=0
   while(c<a){arr.push(c);c++}
   while(z<arr.length-1){
    arr=arr.slice(0,z).concat((arr.slice(z).reverse()))
    res.push(arr),z++
   }return res[res.length-1].indexOf(b)
}
console.log(solve(20,8))