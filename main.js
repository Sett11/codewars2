function shortesttoChar(s,c,a=Array(s.length),z=-Infinity){
    if(!s.includes(c)||!z||!c)return []
    for(let i=0;i<s.length;++i){
        if(s[i]===c)z=i
        a[i]=i-z
    }
    z=Infinity
    for(let i=s.length-1;i>=0;--i){
        if(s[i]===c)z=i
        a[i]=Math.min(a[i],z-i)
    }
    return a
}

console.log(shortesttoChar("lovecodewars",'e'))
console.log(shortesttoChar("aaaabbbb",'b'))
console.log(shortesttoChar("aabbaabb", "a"))


// function diagonals(m,a=[]) {
//     for(let i=0;i<m.length;i++){
//         for(let j=0;j<m.length;j++){
//             let tmp=[i,j]
//             if(tmp.join``===tmp.reverse().join``)a.push(m[i][j])
//         }
//     }
//     return a
// }

// console.log(diagonals([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//   ]))