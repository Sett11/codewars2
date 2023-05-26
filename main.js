function mixFruit(a,f=x=>x.toLowerCase()){
    const p=['banana','orange','apple','lemon','grapes'],u=['avocado','strawberry','mango']
    return (eval(a.map(e=>p.includes(f(e))?5:u.includes(f(e))?7:9).join`+`)/a.length)+.5|0
}

console.log(mixFruit(['watermelon','cherry','avocado']))