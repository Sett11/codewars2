function reverseInvert(a){
    return a.filter(e=>Number.isInteger(e)).map(e=>e>0?-[...e+''].map(Number).reverse().join``:e<0?+[...e+''].filter(u=>u!=='-').map(Number).reverse().join``:-0)
}

  console.log(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]))