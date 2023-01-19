function sortAnimal(animal) {
    if(animal===null){
          return null
        }
        if(animal.length===0){
          return []
        }
        return animal.sort((a,b)=>a.numberOfLegs - b.numberOfLegs|| a.name.localeCompare(b.name))
    }

  console.log(sortAnimal([
    { name: "Cat", numberOfLegs: 4 }, 
    { name: "Snake", numberOfLegs: 0 }, 
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }]))