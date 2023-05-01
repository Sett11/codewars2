function isPrime(num) {
    if(num<2) return false;
    let result = true;
    if (num !== 2) {
      if (num % 2 === 0) {
        result = false;
      } else {
        for (let x=3; result && x<=Math.sqrt(num); x+=2) {
          if (num % x === 0) {
            result = false;
          }
        }
      }
    }  
    return result;
  }
  
  function sum(x, y) {
    return Number(x) + Number(y);
  }
  
  function sumDigits(num) {
    return String(num).split('').reduce(sum, 0);
  }
  
  
  function double(num) {
    return num*2;
  }
  
  function arrayWrapper(num) {
    return [num];
  }
  
  
  function checkSumDigits(min, number) {
    return sumDigits(number) >= min;
  }
  
  function compose(f, g) {
      return function(x) {return f(g(x));};
  }
  
  function partial1(fn, param) {
    return function() {
      return fn.apply(null, [param].concat(Array.prototype.slice.call(arguments) || []));
    };
  }
  
  let limitSumDigits = function(min) {
      return partial1(checkSumDigits, min);
  };


function f(o){
    if(!o.generator||!o.generator.match(/\d/))return []
    let a=o.generator.split`,`.map((e,i)=>e.match(/\.\./)?e.split`..`.map(Number):+e).flat(),r=[a[0]],x=a[0]
    if(a.length===3&&a[0]===1&&a[1]>a[2])return [a[0]]
    if(a.length===2&&a[0]>a[1])return []
    if(a.length===1||!o.generator.match(/\.\./))return a
    if(a.length>2)a[0]=a[1]-a[0]
    if(a.length<3){
        a.unshift(1)
        r=[]
    }
    if(a[1]===a[2])return [x,a[1]]
    for(let i=Math.min(a[2],a[1]);i<=Math.max(a[1],a[2]);i=a[1]<=a[2]?i+a[0]:i-a[0]){
        r.push(i)
    }
    return a[2]>a[1]?r:[r[0]].concat(r.slice(1).reverse())
}
function ArrayComprehension(o){
    let r=f(o)
    if(!o.filters&&!o.transform)return r
    if(o.filters)r=r.filter(e=>o.filters.every(u=>u(e)))
    if(!o.transform)return r
    return r.map(e=>o.transform(e))
}


console.log(ArrayComprehension({generator:'1..5'}))
console.log(ArrayComprehension({generator:'1,3..7'}))
console.log(ArrayComprehension({generator:'1,4..12'}))
console.log(ArrayComprehension({generator:'12,10..4'}))
console.log(ArrayComprehension({generator:'3,2..2'}))
console.log(ArrayComprehension({generator:'5..3'}))
console.log(ArrayComprehension({
    generator: '1..20',
    filters: [isPrime, limitSumDigits(4)],
    transform: compose(arrayWrapper, double)
  }))
  console.log(ArrayComprehension({
    generator: '50..60',
    transform: compose(arrayWrapper, double)
  }))