const gameOfFives=(a,b,f=x=>x.filter(e=>e===5).length)=>f(a)===f(b)?"Drinks All Round! Free Beers on Bjorg!":"Uh Oh! Bjorg's a donut! No beer for anyone!"

console.log(gameOfFives([5,7,3,5,7,1,5,8,1,5,6,1],[5,1,5,6,6,6,5,5]))