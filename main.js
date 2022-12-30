function cutIt(arr){
    const res = []
     arr.map(el => res.push(el.length))
     return arr.map(el => el.slice(0, Math.min(...res)))
  }
  console.log(cutIt(["abc","defgh","ijklmn"]))