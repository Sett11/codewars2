function print(a,b) {
    return a + " -> " + b;
  }

flip=f=>(...a)=>f(...a.reverse())

console.log(flip(print)(4,5))