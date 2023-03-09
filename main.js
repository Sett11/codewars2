function nextHigher(m,n=[...(m).toString(2)].sort().join``,c=m+1) {
    while(1){
        let tmp=[...(c).toString(2)].sort().join``
        if(tmp===n||tmp.slice(1)===n)return c
        c++
    }
}

  console.log(nextHigher(1))