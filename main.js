charCheck=(t,m,s,f=x=>x.replace(/ /g,''))=>s&&t.length<=m?[true,t]:!s&&f(t).length<=m?[true,f(t)]:s&&t.length>m?[false,t.slice(0,m)]:[false,f(t).slice(0,m)]

console.log(charCheck("I am applying for the role of Base Manager on Titan.", 60, true))