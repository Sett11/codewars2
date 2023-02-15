function sum(m) {
    console.log(m)
      n=m.map(e=>e.reverse()).reverse(),s=0,count=2
      while(count){
          for(let i = 0; i < m.length; i++){
              for(let j = 0; j < m[i].length; j++){
                i===j?s+=m[i][j]:null
              }
          }
          m=n,count--
      }return s
  }
  console.log(sum([
    [ -2, 8, -3, -4, 8 ],
    [ 3, -3, -9, 8, -5 ],
    [ 10, 7, -1, 7, 3 ],
    [ -2, 4, 6, 9, 8 ],
    [ 7, -6, -8, -1, 0 ]
  ]))
  console.log(sum([[4]]))