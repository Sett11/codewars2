function balance (a1,a2){
    const a=Object.values(a1.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a-b).join``,b=Object.values(a2.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a-b).join``
    return a===b
  }
  console.log(balance(["a","b","c","d","e","f","g","g"],["h","h","i","j","k","l","m","m"]))