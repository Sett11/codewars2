function max(){
    res=[...arguments].flat(100)
    return res.length===0?0:res.some(e=>+e!==+e)?NaN:+res.sort((a,b)=>b-a)[0]
}
function min(){
    res=[...arguments].flat(100)
    return res.length===0?0:res.some(e=>+e!==+e)?NaN:+res.sort((a,b)=>a-b)[0]
}
console.log(min(1,2,[3,[4]]))