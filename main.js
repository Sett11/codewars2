function evensAndOdds(num){
	return num % 2 === 0 ? num.toString(2): num.toString(16)
}
console.log(evensAndOdds(13))