const tree = [
  {
      v: 5,
      c: [
          {
              v:10,
              c: [
                  {
                      v:11,
                  }
              ]
          },
          {
              v:7,
              c: [
                  {
                      v:5,
                      c: [
                          {
                              v:1
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      v: 5,
      c: [
          {
              v:10
          },
          {
              v:15
          }
      ]
  }
]

const rec = (tree) =>{
  let sum = 0
  tree.map(el => {
    sum += el.v
    if(!el.c){
      return el.v
    }
    sum += rec(el.c)
  })
  return sum
}


console.log(rec(tree))