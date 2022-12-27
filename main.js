const sortme = names =>  names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))

console.log(sortme(["Hello","there","I'm","fine"]))