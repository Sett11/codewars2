function generateName(){
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const arr = []
  while(arr.length<6){
    arr.push(str[Math.floor(Math.random()*52)])
  }
  return photoManager.nameExists(arr.join``) ? generateName() : arr.join``
}