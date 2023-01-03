function capitalsFirst(str){
    str = str.split` `
    const arr = [], arr2 = []
    for(let i = 0; i < str.length; i++){
        if(!str[i][0].match(/[a-zA-Z]/)){
            continue
        }
        if(str[i][0].match(/[a-zA-Z]/) && str[i][0] === str[i][0].toUpperCase()){
            arr.push(str[i])
        }
        if(str[i][0].match(/[a-zA-Z]/) && str[i][0] === str[i][0].toLowerCase()){
            arr2.push(str[i])
        }
    }
    return arr.length !== 0 && arr2.length !== 0 ? arr.join` ` + ' ' + arr2.join` ` :
    arr.length === 0 ? arr2.join` ` : arr2.length === 0 ? arr.join` ` : ''
  }
  console.log(capitalsFirst("hey You, Sort me Already!"))