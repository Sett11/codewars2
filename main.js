crossover=(c1,c2,g)=>[c1.slice(0,g)+c2.slice(g),c2.slice(0,g)+c1.slice(g)]


console.log(crossover('111000','000110',3))