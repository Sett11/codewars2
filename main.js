removeSmallest=f=(n,b,a=b.slice())=>n<1?a:n>a.length?[]:a.splice(a.indexOf(Math.min(...a)),1)&&f(n-1,b,a)


console.log(removeSmallest(3,[5,3,2,1,4]))