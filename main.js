function sort(w,a=[],b=[],c=[],s=[...w]){
    s.forEach(e=>+e===+e?a.push(e):+e!==+e&&!e.match(/[a-z]/i)?b.push(e):c.push(e))
    a=a.filter(e=>e!==' '&&e!=='\n'),c=c.map(e=>e===e.toUpperCase()?[e.toLowerCase(),1]:[e,0])
    return c.sort((a,b)=>a[0].localeCompare(b[0])||b[1]-a[1]).map(e=>e[1]?e[0].toUpperCase():e[0]).concat(a.sort((a,b)=>+a- +b)).concat(b.sort()).join``
}

console.log(sort(`() => {

    let text = '',
        _stringlen  = _string.length,
        _txtlen     = ~~(Math.random()*100);
  
    for(let i=0; i < _txtlen; i++ ) {
  
      text += _string[~~(Math.random() * _stringlen)];
    }
    
    return text;
  }`))