function findTheKey(message, code) {
  const arr = message.split``.map((el) => el.charCodeAt()-96)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = code[i%code.length]-arr[i]
  }

  function F(array) {
    let seq = arr.join``;
    let res = "";
    function Z(seq, sub) {
      for (let i = 0; i < seq.length; i += 1) {
        if (seq[i] !== sub[i % sub.length]) {
          return false;
        }
      }
      return true
    }
    for(let i = 0; i < seq.length; i+=1){
        res += seq[i]
        if(Z(seq,res)){
            return res
        }
    }
    return res
  }
  return F(arr)*1
}
console.log(
  findTheKey("masterpiece", [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
);
