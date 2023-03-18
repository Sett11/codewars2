function bitMarch(n,a=[],c=8-n,z=0){
    while(c>=0){
        a.push('0'.repeat(z)+ '1'.repeat(n)+'0'.repeat(c))
        --c,++z
    }
	return a.reverse().map(e=>[...e].map(Number))
}

console.log(bitMarch(3))