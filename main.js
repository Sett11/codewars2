const VALUES={ RUB: [ 10, 50, 100, 500, 1000, 5000 ],
    EUR: [ 5, 10, 20, 50, 100, 200, 500 ],
    UAH: [ 1, 2, 5, 10, 50, 100, 500 ],
    USD: [ 1, 2, 5, 10, 20, 50, 100 ],
    CUP: [ 1, 3, 5, 10, 20, 50, 100 ],
    SOS: [ 1000 ] }


function atm(v,s=v.toLowerCase(),n=+s.replace(/\D/g,''),z=s.replace(/[\d ]/g,'').toUpperCase()) {
    let i=0,str=''
    if(!VALUES[z])return `Sorry, have no ${z}.`
    let b=VALUES[z].slice().reverse()
    if(n<b[b.length-1]||n%b[b.length-1]!==0)return `Can\'t do ${n} ${z}. Value must be divisible by ${b[b.length-1]}!`
    if(n%b[0]===0)return `${n/b[0]} * ${b[0]} ${z}`
    if(n>b[0]){
    let m=n-n%b[0]
    n-=m
    str+=`${m/b[0]} * ${b[0]} ${z}, `
    }
    while(1){
        if(n<b[i])i++
        if(n>=b[i]&&i!==b.length-1){
            let o=n-n%b[i]
            n-=o
            str+=`${o/b[i]} * ${b[i]} ${z}, `
        }
        if(n>=b[i]&&i===b.length-1){
            o=n-n%b[i]
            n-=o
            str+=`${o/b[i]} * ${b[i]} ${z}, `
        }
        i++
        if(n===0)return str.slice(0,str.length-2)
    }
}

  console.log(atm('2980 eur'))
  console.log(atm('EUR 400'))
  console.log(atm('RUB 40010'))