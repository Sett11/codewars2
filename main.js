
function cookie(x){
  return  typeof x ==='string' ? "Who ate the last cookie? It was Zach!": Number.isFinite(x)?
    "Who ate the last cookie? It was Monica!":
    "Who ate the last cookie? It was the dog!"
}
console.log(cookie(3))