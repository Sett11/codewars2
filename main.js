function calorie(a){
    return `${a[0]}´s daily calorie requirement is ${(Math.round((a[4]*10+6.25*a[3]-5*a[2]+(a[1]==='m'?5:-161))*{"little activity":1.2,"moderately active":1.55,"very active":1.7,"extremely active":1.9}[a[5]]*100)/100).toFixed(2)} kcal.`
}

console.log(calorie(["Sandra", "f", 17, 165, 61, "extremely active"]))