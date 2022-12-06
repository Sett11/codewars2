
function alphabetPosition(text){
    return [...text]
    .map( el => parseInt( el, 36) - 10)
    .filter( el => el >= 0).map(el => el+1)
    .join(' ')
}
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
