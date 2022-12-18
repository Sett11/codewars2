class Girl{
  constructor(name, age, boobs_size, loves_to_suck = true){
    this.name = name
    this.age = age
    this.boobs_size = boobs_size
    this.loves_to_suck = loves_to_suck
  }
  minet(){
    return `Wow! cham! cham! cham!`
  }
}
const maria = new Girl('Maria', 25, 3, true)
console.log(maria.minet())