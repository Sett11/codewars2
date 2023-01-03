function change(s){
    s = s.replace(/\W/g, '').toLowerCase().split``
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i < arr.length; i++){
        if(s.indexOf(arr[i]) !== -1){
            arr[i] = 1
        } else{
            arr[i] = 0
        }
    }
    return arr.join``
  }
  console.log(change("a **&  bZ"))