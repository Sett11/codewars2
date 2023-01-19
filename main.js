
const Converter = {
    toAscii: function (hex) {
        const arr = []
        for(let i = 0; i < hex.length; i+=2){
            arr.push(hex.slice(i, i+2))
        }
        return arr.map(el=> String.fromCharCode(parseInt(el,16))).join``
    },
    toHex: function (ascii) {
      return ascii.split``.map((el,i)=> (el.charCodeAt()).toString(16)).join``
    }
  }

  
  console.log(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473"))