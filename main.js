validPhoneNumber=s=>s.replace(/\d/g,'').length>4?NaN===NaN:/\(\d{3,3}\) \d{3,3}\-\d{4,4}/.test(s)


console.log(validPhoneNumber("(123) 456-7890"))