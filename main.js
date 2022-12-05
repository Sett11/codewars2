function meeting(s) {
    return s.split(/\;/)
    .map(el => el.split(':').reverse().join(', ').toUpperCase())
    .sort().map(el => '('+el+')').join('')
}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))