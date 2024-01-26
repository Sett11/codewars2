function holidayCount(a1,a2){
    const f=a=>a.filter(e=>Number.isInteger(e))
    a1=f(a1)[0],a2=f(a2)[0]
    return a1>a2?'Right':a1<a2?'Wrong':a1===a2?'Same':'Not possible'
}

console.log(holidayCount(["code", "is", "good", "I", "hope", 35],[102, "and", "hopefully", "also", "this", "passes"]))