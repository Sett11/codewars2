function findTheLocation(s){
    console.log(s)
      s=s.split` `.filter(e=>e!=='').filter(e=>e[0]===e[0].toUpperCase()&&e!=='The'&&e!=='At'&&e!=='In'&&e.length>2&&e!=='Brunswick'&&e!=='Near'&&e!=='Just')
      for(let i = 0; i < s.length; i++){
          if(s[i]==='South'&&s[i+1]==='East'||s[i+1]==='North'||s[i+1]==='West')s[i]='&'
          if(s[i]==='East'&&s[i+1]==='South'||s[i+1]==='North'||s[i+1]==='West')s[i]='&'
      }s=s.filter(e=>e!=='&'&&e!=='Lane'&&e!=='Thomas'&&e!=='Parking'&&e!=='Brunswick'&&e!=='Along'&&e!=='Parker'&&e!=='Last')
      if(s[s.length-1]==='Brunswick')s=s.slice(0,s.length-1)
      return s.join` `.replace(/[^A-Za-z ]/g,'')
        .replace('Brunswick', '').replace('Lane', '').replace('Friday', '')
        .replace('Tom', '').replace('Dooley', '').replace('Beth', '').replace('Butterfield', '').replace('Julie', '').replace('Weatherley', '')
        .replace('Gus', '').replace('Forest', '').replace('Elsa', '').replace('Brooks', '')
        .trim()
  }
console.log(findTheLocation("The bird was in the parking lot at North Chagrin Reservation foraging under a sycamore tree."))
console.log(findTheLocation("At Lingmeyer Beach Park in the far eastern dunes."))
console.log(findTheLocation('In Inverness Preserve near the edge of the meadows with Elsa Brooks just inside the boundary fence'))