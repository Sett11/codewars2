function solution(arr, o){
  a=arr.slice()
  for (let i = 0; i < a.length; ++i) {
    a[i] += 2 * o.modifier
  }
  return a;
}
