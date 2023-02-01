const readableTimetable = (w) => {
    if(w.length===0)return []
      const arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((el,i)=>[el,i])
      w=w.map(el=>Object.entries(el).map(ul=>ul[1])).map((el,i)=>{
          for(let i = 0; i < arr.length; i++){
              if(el[0]===arr[i][0]){
                  el.push(arr[i][1])
              }
          }
          return el
      }).sort((a,b)=>a[3]-b[3])
      for(let i = 0; i < w.length-1; i++){
          if(w[i][1]===w[i+1][1]&&w[i][2]===w[i+1][2]&&w[i+1][3]-w[i][3]===1){
              w[i+1][0] = w[i][0] + ', ' + w[i+1][0]
              w.splice(i,1)
              i--
          }
      }
      w=w.map(el=>[el[0],el[1],el[2]]).map(el=>{
          el[0] = el[0].split`,`
          if(el[0].length>2){
              el[0] = [el[0][0], el[0][el[0].length-1]]
          }
          return el
      }).map(el=>{
          if(el[0].length>1){
              el[0] = el[0].join` -`.toUpperCase() + ':'
              el[1] = [el[1],el[2]].join` - ` + '\n'
              el[3] = 0
              el.length=2
              return el
          }
          el[0] = el[0].join``.toUpperCase() + ':'
          el[1] = [el[1],el[2]].join` - ` + '\n'
          el[3] = 0
          el.length=2
          return el
      }).join``.replace(/,/g, ' ')
      return w.slice(0,w.length-1)
  }
  console.log(readableTimetable([
    { "day": "mon", "from": "11:00", "to": "23:00" },
    { "day": "tue", "from": "11:00", "to": "23:00" },
    { "day": "wed", "from": "11:00", "to": "23:00" },
    { "day": "thu", "from": "12:00", "to": "23:00" }, 
    { "day": "fri", "from": "12:00", "to": "23:00" },
    { "day": "sat", "from": "10:00", "to": "23:00" },
    { "day": "sun", "from": "11:00", "to": "23:00" }
]))