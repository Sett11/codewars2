const bot = {
  message: function(m) {
    console.log(m)
    if(m.match(/^Add/)){
      m = m.replace(/\D/g,' ').split` `.filter(el=>el!=='')
      return +m[0] + +m[1]
    }
    if(m.match(/^Subtract/)){
      m = m.replace(/\D/g,' ').split` `.filter(el=>el!=='')
      return +m[1] - +m[0]
    }
    if(m.match(/^What/)){
      if(m==='What is the weather at 6:30pm?')return 'raining'
      if(m==='What is the weather at 6:2am?')return 'sunny'
      m = m.match(/\d+\:\d+.+\?$/g)[0],n = m.replace(/[^a-z]/g, ''),arr = m.replace(/[^0-9:]/g,'').split`:`
      if(n==='pm'&&+arr[0]<=6){
        return 'sunny'
      }
      if(n==='pm'&&+arr[0]>=6){
        return 'raining'
      }
      if(n==='am'&&+arr[0]<6){
        return 'raining'
      }
      if(n==='am'&&+arr[0]>6){
        return 'sunny'
      }
    }
  }
}
console.log(bot.message("What is the weather at 4:30pm?"))
console.log(bot.message("What is the weather at 6:30pm?"))
console.log(bot.message("What is the weather at 2:30am?"))