searchNames=a=>a.filter((_,i,v,c=(v[i-1]||''))=>c[0]==='.'||c[c.length-1]==='.')

console.log(searchNames(["foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com"]))