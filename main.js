const userdata=[ { username: 'g964', password: '135246', email: '123412@163.com' },
{ username: 'giacomosorbi',
  password: '135246',
  email: '123412@163.com' },
{ username: 'zozofouchtra',
  password: '135246',
  email: '123412@163.com' },
{ username: 'colbydauph',
  password: '135246',
  email: '123412@163.com' },
{ username: 'jhoffner',
  password: '135246',
  email: '123412@163.com' },
{ username: 'myjinxin2015',
  password: '135246',
  email: '123412@163.com' },
{ username: 'bkaes',
  password: '135246',
  email: '123412@163.com' },
{ username: 'crazymerlyn',
  password: '135246',
  email: '123412@163.com' },
{ username: 'unnamed',
  password: '135246',
  email: '123412@163.com' },
{ username: 'overzealous',
  password: '135246',
  email: '123412@163.com' },
{ username: 'laoris',
  password: '135246',
  email: '123412@163.com' },
{ username: 'name613',
  password: '135246',
  email: '123412@163.com' },
{ username: 'balkoth',
  password: '135246',
  email: '123412@163.com' },
{ username: 'mortonfox',
  password: '135246',
  email: '123412@163.com' },
{ username: 'azuaron',
  password: '135246',
  email: '123412@163.com' },
{ username: 'ooflorent',
  password: '135246',
  email: '123412@163.com' },
{ username: 'xdranik',
  password: '135246',
  email: '123412@163.com' },
{ username: 'abbe', password: '135246', email: '123412@163.com' },
{ username: 'jacobb',
  password: '135246',
  email: '123412@163.com' },
{ username: 'battlerattle',
  password: '135246',
  email: '123412@163.com' },
{ username: 'wthit56',
  password: '135246',
  email: '123412@163.com' },
{ username: 'smile67',
  password: '135246',
  email: '123412@163.com' },
{ username: 'bellmyer',
  password: '135246',
  email: '123412@163.com' },
{ username: 'timp', password: '135246', email: '123412@163.com' },
{ username: 'raulbc777',
  password: '135246',
  email: '123412@163.com' } ]

  function isValid(a,f=x=>x.toLowerCase()){
    console.log(a)
    let s=['administrator','admin','system','john'],c=['hotmail.com','facebook.com','gmail.com','163.com','126.com']
    if(a.username.length<4)return "Error: username is too short."
    if(a.username.length>16)return "Error: username is too long."
    if(a.username.match(/\W/))return "Error: username contains invalid characters."
    if(userdata.some(e=>f(e.username)===f(a.username)))return "Error: username has been registered by other users."
    if(s.includes(f(a.username)))return "Error: username has been reserved by system."
  
    if(a.password.length<6)return "Error: password is too short."
    if(a.password.length>15)return "Error: password is too long."
    if(a.password.match(/[^a-z0-9]/i))return "Error: password contains invalid characters."
    if([...a.password].sort().join``===a.password||new Set(a.password).size<3||a.password===a.username)return "Error: password is a weak password."
  
    if(a.email.match(/[^a-z0-9_.@]/i))return "Error: email address contains invalid characters."
    if(a.email.slice(0,a.email.slice(a.email.lastIndexOf('.')).length!==4)||a.email.indexOf('.')!==a.email.lastIndexOf('.')||!a.email.match('.'))return "Error: email address format is invalid."
    if(!c.some(e=>a.email.endsWith(e)))return "Error: email address is not allowed."
    userdata.push(a)
    return "User registration success!"
  }

console.log(isValid({username:"smi",password:"1234",email:"1@2.3"}))