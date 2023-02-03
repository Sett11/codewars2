const searchArray = (a, q) => {
    if(a.some(el=>typeof el!=='object')||typeof q!=='object'||q.length!==2||!a.every(el=>el.length===2))throw Error
    return a.map((el,i)=>[el,i]).filter(el=>el[0].join``===q.join``).map(el=>el[1])[0]||-1
  }
console.log(
  searchArray([
    [2, 3],
    [7, 2],
    [9, 20],
    [1, 2],
    [7, 2],
    [45, 4],
    [7, 87],
    [4, 5],
    [2, 7],
    [6, 32],
  ], [9,20])
);
