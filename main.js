function validate(u,p){
  u=u.trim(),p=p.trim()
  if(u.length>12)throw ERRORS['usernameTooLong'](u)
  if(u.match(/[\(\)\{\}\[\]\|\;\:\'\"\/\?\.\,\<\>\~\-\=\+\*\&\^\%\$\@\!]/))throw ERRORS['usernameInvalidCharacters'](u)
  if(!u||u.length<1)throw ERRORS['usernameTooShort'](u)
  if(p.length>24)throw ERRORS['passwordTooLong'](p)
  if(!p||p.length<8)throw ERRORS['passwordTooShort'](p)
  if(p.match(/[\(\)\{\}\[\]\|\;\:\'\"\/\?\.\,\<\>\~\-\=\+\*\&\^\%\$\@\!]/))throw ERRORS['passwordInvalidCharacters'](p)
  if(!p.match(/[A-Z]/))throw ERRORS['passwordNoCapital'](p)
  if(!p.match(/\d/))throw ERRORS['passwordNoNumber'](p)
  if(p.match(u))throw ERRORS['passwordContainsUsername'](p)
  return true
}