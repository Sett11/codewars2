makeLazy=(...a)=>_=>a[0](...a.slice(1))

function add(a,b){
    return a + b;
}
let lazy_value = makeLazy(add, 2, 3)

console.log(lazy_value())