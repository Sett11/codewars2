function validateHello(greetings) {
  res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
  return res
}