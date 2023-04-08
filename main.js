function isCircleSorted(a){
    for(let i=0;i<=a.length;i++){
        if(a.slice(i).concat(a.slice(0,i)).join``===a.slice().sort((a,b)=>a-b).join``)return !0
    }
    return !1
}

  console.log(isCircleSorted([2, 3, 4, 5, 0, 1]))