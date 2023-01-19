function part(x){
    let counter = 0
    for(let i = 0; i < x.length; i++){
        if(x[i]==='Partridge'||x[i]==='PearTree'||x[i]==='Chat'||x[i]==='Dan'||x[i]==='Toblerone'||x[i]==='Lynn'||x[i]==='AlphaPapa'||x[i]==='Nomad'){
            counter++
        }
    }
    return counter === 0 ? `Lynn, I've pierced my foot on a spike!!` : `Mine\'s a Pint` + '!'.repeat(counter)
}
  console.log(part(['Grouse', 'Partridge', 'Pheasant']))