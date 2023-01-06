const nthterm = (f, n, c) => {
  const arr = [f]
  while(arr.length < n+1){
    arr.push(arr.reduce((acc)=>acc+=c,f))
  }
  return arr.reverse()[0]
};
console.log(nthterm(-50,10,20));
