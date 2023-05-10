function automaton(e){
	if (typeof e==="string") {
		return e.replace(/[^aeiuo]/ig, "").length
	} else if(typeof e==="number") {
		if(e<2||!Number.isInteger(e))return false
    if(e===2)return true
		for (var i = 2; i < Math.sqrt(e)+1; i++) if (e % i===0) return false;
		return true
	} else if(typeof e==="object"){
		var a={}
		for (var k in e)a[e[k]+'']=k
		return a
	}
}