i=w=>!w||w[0]==='I'||w[0]==='i'||!w[0].match(/[A-Z]/)?"Invalid word":w.replace(/[^aioue]/gi,'').length>=w.replace(/[aioue]/gi,'').length?"Invalid word":'i'+w


console.log(i('Inspire'))
console.log(i('Phone'))