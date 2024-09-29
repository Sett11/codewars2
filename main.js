const calculateHypotenuse=(a,b,f=x=>typeof x==='number'&&x>0)=>{
    if(f(a)&&f(b))return +((a**2+b**2)**.5).toFixed(3)
    throw Error()
}


console.log(calculateHypotenuse(1,1))
console.log(calculateHypotenuse(3,4))
console.log(calculateHypotenuse(9,9))
console.log(calculateHypotenuse(1,NaN))