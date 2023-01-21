function validPass(password){
  if(password.length<4||password.length>19||password.match(/\W/g)||!password.match(/[0-9]/g)||!password.match(/[a-zA-Z]/g))return 'INVALID'
  return 'VALID'
}
console.log(validPass('Username123'))