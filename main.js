function addUsername(list) {
  const today = new Date()
  return list.map((el) => {
    el.username = `${el.firstName.toLowerCase() + el.lastName.toLowerCase().replace(/\./, '') + (today.getFullYear() - el.age)}`
    return el
  })
}
console.log(addUsername([
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]))