const noIfsNoButs = function (a,b) {
  const res1 = (a-b)<0&&`${a} is smaller than ${b}`
  const res2 = (a-b)>0&&`${a} is greater than ${b}`
  const res3 = (a-b)===0&&`${a} is equal to ${b}`
  return res1||res2||res3
}
console.log(noIfsNoButs(100,100))