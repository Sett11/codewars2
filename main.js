function mobileDisplay(n,p){
    n=n<20?20:n,p=p<30?30:p,c=~~(n/100*p),w='*'.repeat(n),a=Array(c-2).fill('*'+' '.repeat(n-2)+'*')
    a.push(w),a.unshift(w),a[Math.floor(a.length/2)-1]='*'+' '.repeat(Math.floor(n/2)-5)+'CodeWars *',a[a.length-2]='* '+'Menu'+' '+'Contacts *'
    while(a[Math.floor(a.length/2)-1].length<n)a[Math.floor(a.length/2)-1]=a[Math.floor(a.length/2)-1].replace(/s/,'$& ')
    while(a[a.length-2].length<n)a[a.length-2]=a[a.length-2].replace(/C/,' $&')
    return a.join`\n`
}

console.log(mobileDisplay(27,41))