
    function toBinary (n) {
        let bin = (n%2).toString()
        for(; n > 1; ){
            n = parseInt(n/2)
            bin = (n%2) + (bin)
        }
        return bin
    }
  console.log(toBinary(11))