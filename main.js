const DATA = [
        [0,    15,       "Very severely underweight"],
        [15,   16,       "Severely underweight"],
        [16,   18.5,     "Underweight"],
        [18.5, 25,       "Normal (healthy weight)"],
        [25,   30,       "Overweight"],
        [30,   35,       "Obese Class I (Moderately obese)"],
        [35,   40,       "Obese Class II (Severely obese)"],
        [40,   45,       "Obese Class III (Very severely obese)"],
        [45,   50,       "Obese Class IV (Morbidly obese)"],
        [50,   60,       "Obese Class V (Super obese)"],
        [60,   Infinity, "Obese Class VI (Hyper obese)"],
    ]

function calculateBmi(w,v,h=v/100,c=(w/(h*h)).toFixed(1)){
    return {value:c,category:DATA.filter(e=>e[0]<=+c&&e[1]>+c)[0][2]}
}

console.log(calculateBmi(65,175))