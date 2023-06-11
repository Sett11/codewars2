const countChange=x=(n,a)=>n<0||!a.length?0:!n?1:x(n-a[0],a)+x(n,a.slice(1))

console.log(countChange(100,[5, 2, 3]))