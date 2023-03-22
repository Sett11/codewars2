function string_evaluation(s,c){
    s=[...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})
    return c.map(e=>eval(e.replace(/[a-zA-Z\@\#\$\%\^\&\*\(\)\_\{\}\[\]]/g,e=>s[e]?s[e]:e)))
}

  console.log(string_evaluation('abb', ['a>b','b==a','b<=a','b>a','b!=b','a==1','b==1']))