function distSameLetter(s,a=[]) {
    for(let i=0;i<s.length;i++){
        a.push([s.indexOf(s[i]),s.lastIndexOf(s[i])])
    }
    a=a.map(e=>[e[0],(e[1]-e[0])+1]).sort((a,b)=>b[1]-a[1])[0]
    return s[a[0]]+a[1]
}
  console.log(distSameLetter("haaafhahhhuuuiuuuuiiifxxx"))  