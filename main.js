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
  if(!tree.length){
    return 0
  }
  let sum = 0
  let arr = []
  tree.map(el=> arr.push(el))
  while(arr.length){
    const el = arr.pop()
    sum += el.v
    if(el.c){
      el.c.map(nel=>arr.push(nel))
    }
  }
  return sum
}


console.log(rec(tree))