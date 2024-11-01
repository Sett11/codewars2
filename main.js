const maxConsecutiveSequenceLength=a=>{
    let n=a.length,r=Array(n).fill(0),x=0
    for(let i=-1;++i<n;){
        let m=0
        for(let j=-1;++j<i;)if(Math.abs(a[i]-a[j])<2&&a[i]>=a[j]&&r[j]>m)m=r[j]
        r[i]=m+1
        x=Math.max(r[i],x)
    }
    return x
}

console.log(maxConsecutiveSequenceLength([9,7,9,2,6,8,5,9,1,5]))
console.log(maxConsecutiveSequenceLength([3,2,1,2,3,3,2,2,2,3,4]))
console.log(maxConsecutiveSequenceLength([-4,-4,-4,-3]))