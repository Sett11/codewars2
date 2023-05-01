function ArrayComprehension(o){
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


console.log(ArrayComprehension({generator:'1..5'}))
console.log(ArrayComprehension({generator:'1,3..7'}))
console.log(ArrayComprehension({generator:'1,4..12'}))
console.log(ArrayComprehension({generator:'12,10..4'}))
console.log(ArrayComprehension({generator:'3,2..2'}))
console.log(ArrayComprehension({generator:'5..3'}))
console.log(ArrayComprehension({generator:'1,90..80'}))