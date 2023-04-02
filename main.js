alphanumeric=s=>s&&!s.replace(/[A-Za-z0-9]/g,'')?1==1:1==2

console.log(alphanumeric('Mazinkaiser'))