sc=(s,c,f=RegExp(`^${s.replace(/~/g,'.')}`,'i'))=>c.filter(e=>f.test(e)).join`,`


console.log(sc('p~t~r',['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']))