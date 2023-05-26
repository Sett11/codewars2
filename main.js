function oragoo(s){
    if(!s||!s.match(/[aiouey]/))return s
    if(!s.match(/[aioue]/)&&s.includes('y'))return s.replace(/y/,'oragy')
    if(s[0].match(/[aioeu]/))return 'orag'+s
    return s.replace(/^[^aioue]+/g,e=>e+'orag')
}

console.log(oragoo('hi'))