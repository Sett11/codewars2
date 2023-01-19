function colourAssociation(array){
    return array.map(el=>{
        let obj = {}
        obj[el[0]] = el[1]
        return obj
    })
}
  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))