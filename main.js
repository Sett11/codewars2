function findTheKey(messages , secrets) {
    const arr = []
    for(let i = 0; i < messages.length; i++){
        for(let j = 0; j < messages[i].length; j++){
            if(messages[i][j]!==secrets[i][j]&&arr.indexOf(messages[i][j]!==-1&&arr.indexOf(secrets[i][j]!==-1))){
                arr.push([messages[i][j], secrets[i][j]])
            }
        }
    }
    const res = [...new Set(arr.map(el=>el.join``))].map(el=>el.split``.sort().join``).sort.join``
    return [...new Set(res)].join``
}
console.log(findTheKey([ "dance on the table", "hide my beers", "scouts rocks" ],
[ "egncd pn thd tgbud" ,"hked mr bddys" ,"scplts ypcis" ]))