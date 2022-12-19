function last(x) {
  return x
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .sort((a,b) => {
      if(a == b){
        return a = b
      }
    })
    .map((el) => [...el].reverse().join(""));
}
console.log(last("what time are we climbing up the volcano"));
