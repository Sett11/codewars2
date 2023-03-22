function check(a){
    a=a.map((e,i)=>e.map((u,j)=>u!=='*'?[i,j]:0).filter(e=>e).flat()).filter(e=>e.length)
    return a.length===1||a[0][0]===a[1][0]||a[0][1]===a[1][1]||Math.abs(a[1][0]-a[0][0])===Math.abs(a[1][1]-a[0][1])?true:false
}

console.log(check([
    [ '*', 'q', '*', '*', 'k' ],
    [ '*', '*', '*', '*', '*' ],
    [ '*', '*', '*', '*', '*' ],
    [ '*', '*', '*', '*', '*' ],
    [ '*', '*', '*', '*', '*' ]
  ]))