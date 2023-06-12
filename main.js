// function defaultArguments(f,p){
//     return function(...a){
//         let s=f.toString().match(/\(.+\)/g)[0].replace(/\(|\)/g,'').split`,`
//         return 
//         if(s.length===a.length)return f(...a)
//         while(s.length>a.length)s=s.slice(1)
//         s=s.map(e=>p[e])
//         return f(...a,...s)
//     }
// }

// function add(a,b){return a+b}
// let add_ = defaultArguments(add,{b:9});
// add_(10); // returns 19
// add_(10,7); // returns 17
// add_();
// add_ = defaultArguments(add_,{b:3, a:2})
// console.log(add_(10))

function print(a,b) {
    return a + " -> " + b;
  }

flip=f=>(...a)=>f(...a.reverse())

console.log(flip(print)(4,5))