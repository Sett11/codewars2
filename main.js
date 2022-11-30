const tree = [
  {
      v: 5,
      c: [
          {
              v: 5
          },
          {
              v: 10,
              c: [
                  {
                      v: 11,
                  }
              ]
          },
          {
              v: 11,
              c: [
                  {
                      v: 12,
                      c: [
                          {
                              v: 5
                          }
                      ]
                  }
              ]
          },
      ]
  },
  {
      v: 5,
      c: [
          {
              v: 7
          },
          {
              v: 12,
              c: [
                  {
                      v: 11,
                  }
              ]
          },
          {
              v: 14,
          },
      ]
  }
]

const f = (n) => {
  if(!tree.length){
    return 0
  }
  let sum = 0
  let arr = []

  tree.map(el=>arr.push(el))

  while(arr.length){
    let node = arr.pop()
    sum += node.v
    if(node.c){
      node.c.map(el=>arr.push(el))
    }
  }
  return sum
}
console.log(f(tree))