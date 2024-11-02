pipeline=(...a)=>{
    if(!a.length)return
    let x=a.shift()
    return !a.length?x:a.reduce((acc,curr)=>acc=curr(acc),x)
}

compose=(...a)=>{
    if(!a.length)return
    return function(x){
        if(!x)return
        a.reverse().forEach(e=>x=e(x))
        return x
    }
}

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);

console.log(pipeline(42,x=>-x))
console.log(pipeline())

console.log(welcome('moe'))