function newYorker(s){
    return s.replace(/\./g,' my guy$&')
}

console.log(newYorker(`Bees are flying insects closely related to wasps and ants, known for their 
role in pollination and, in the case of the best-known bee species, the 
European honey bee, for producing honey and beeswax. Bees are a monophyletic 
lineage within the superfamily Apoidea and are presently considered a clade, 
called Anthophila. There are nearly 20,000 known species of bees in seven 
recognized biological families. They are found on every continent except 
Antarctica, in every habitat on the planet that contains insect-pollinated 
flowering plants.`))