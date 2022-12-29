function rotate(str) {
  if(!str){
    return []
  }
  const res = str.split``.map((el, i, arr) =>
    (arr.slice(i) + arr.slice(0, i)).replace(/,/g, "")
  );
  res.push(res.shift())
  return res
}
console.log(rotate("Hello"));
