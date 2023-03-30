function charToAscii(s){
    return !s.match(/[A-z]/)?null:[...s.replace(/[\W_]/g,'')].reduce((a,c)=>{a[c]=c.charCodeAt();return a},{})
}

  console.log(charToAscii("ABaa _^"))