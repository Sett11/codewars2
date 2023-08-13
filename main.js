function isHex(s){
	return typeof parseInt(s,16)=='number'&&(s.length==3||s.length==6)&&!s.match(/[g-z]/i)
}

console.log(isHex('ff00ff'))
console.log(isHex('b0Ff'))