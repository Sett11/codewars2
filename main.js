function checkAvailability(a,s){
    a=a.map(e=>e.map(u=>u.split`:`.map(z=>+z))),s=s.split`:`.map(e=>+e)
    for(let i=0;i<a.length;i++)if(a[i][0][0]<s[0]&&a[i][1][0]>=s[0]&&a[i][1][1]>s[1])return a[i][1].join`:`
    return 1==1
}

console.log(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "10:00"))